import { Component } from "react";
// import { Helmet } from "react-helmet";

import "../Styles/sh.css";
import "jquery.terminal/css/jquery.terminal.css";

import CV from "../Components/CV";

const jquery = require("jquery");
const terminal = require("jquery.terminal");

const $ = (window.$ = window.jQuery = terminal(this, jquery));

class Sh extends Component {
  componentDidMount() {
    $(function($) {
      const cv = new CV();
      const term = $("#root").terminal(
        function(command, term) {
          term.pause();
          var msg = "";

          switch (command.toLowerCase()) {
            case "help":
            case "ls":
            case "ll":
              msg = cv.getHelp();
              break;
            default:
              var results = cv.getInfo(command);

              if (results !== null) {
                msg = results;
              } else if (command.length > 0) {
                msg = `[[;red;]Command "${command}" not found.`;
              }

              break;
          }

          term.resume();

          return msg + (msg.length > 0 ? "\n" : "");
        },
        {
          autocompleteMenu: true,
          completion: Object.keys(cv.Commands)
        }
      );

      term.clear();
      term.echo(cv.getHomeScreen());
    });
  }

  render() {
    return "";
  }
}

export default Sh;
