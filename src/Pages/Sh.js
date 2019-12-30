import { Component } from "react";
// import { Helmet } from "react-helmet";

import "../Styles/sh.css";
import "jquery.terminal/css/jquery.terminal.css";

import CV from "../Components/CV";

import $ from "jquery"
require("jquery.terminal")


class Sh extends Component {
  componentDidMount() {
    const cv = new CV();
    window.term = $("#root").terminal(
      function(command, term) {
        window.term.pause();
        var msg = "";

        switch (command.toLowerCase()) {
          case "help":
          case "ls":
          case "ll":
            msg = cv.getHelp();
            break;
          case "home":
            window.location = "/";
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

        window.term.resume();

        return msg + (msg.length > 0 ? "\n" : "");
      },
      {
        autocompleteMenu: true,
        completion: Object.keys(cv.Commands)
      }
    );

    window.term.clear();
    window.term.echo(cv.getHomeScreen());
  }

  componentWillUnmount() {
    window.term = undefined;
  }

  render() {
    return "";
  }
}

export default Sh;
