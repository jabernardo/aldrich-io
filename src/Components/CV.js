import Projects from "./Projects.js";

class CV {
  constructor() {
    this.HomeMessage = `
[[;green;]
e   e  e eeee e     eeee eeeee eeeeeee eeee
8   8  8 8    8     8  8 8  88 8  8  8 8
8e  8  8 8eee 8e    8e   8   8 8e 8  8 8eee
88  8  8 88   88    88   8   8 88 8  8 88
88ee8ee8 88ee 88eee 88e8 8eee8 88 8  8 88ee
[[;yellow;]
Hi there! I'm John Aldrich Bernardo  Y(^.^)
Just type "help" for the list of commands 
[[;gray;]
    `;

    this.Commands = {
      education: `
## View my educational background ##

[[;green;]Bachelor of Science in Computer Science
[[;gray;]  - 2011-2015
  - College of Mary Immaculate
  - Pandi, Bulacan
      `,

      work: `
## Know where I work ##

[[;green;]U.S. Auto Parts Network (Philippines) Corp.
[[;gray;]  - Associate Lead-Developer
  - 2015-Present
  - Mandaluyong, Metro Manila

[[;green;]Bachelor of Science in Computer Science
[[;gray;]  - Part-time Instructor
  - 2019-Present
  - College of Mary Immaculate
  - Pandi, Bulacan
      `,

      awards: `
## Some awards ##
[[;green;]Mr. Programmer
[[;gray;]  - Computer Science Day 2015
  - College of Mary Immaculate

[[;green;]I.T. Genius Award
[[;gray;]  - Computer Science Day 2015
  - College of Mary Immaculate

[[;green;]Departmental Awardee
[[;gray;]  - Computer Science Department \`Batch 2015, March 2015
  - College of Mary Immaculate
      `,

      contact: `
## Know where to contact me ##
Hey! Just e-mail me at 4ldrich@protonmail.com. Have a good day! 
`,

      home: `## Back to the future! ##`,

      projects(use_descriptions = false) {
        if (use_descriptions) return `## My Personal projects ##`;
        var screen = "";

        const proj = new Projects();

        proj.get().forEach(data => {
          screen += `
[[;green;]${data.name}[[;gray;] ([[;blue;]${data.html_url}[[;gray;])
  - ${data.description}
`;
        });

        return screen;
      }
    };
  }

  getHomeScreen() {
    return this.HomeMessage;
  }

  getInfo(keyword) {
    if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "string"
    ) {
      return this.Commands[keyword].replace(/##(.*)##/g, "").trim();
    } else if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "function"
    ) {
      return this.Commands[keyword]();
    }

    return null;
  }

  getHelp() {
    var help = "";

    Object.keys(this.Commands).forEach(cmd => {
      var preview = "";
      var tokens =
        typeof this.Commands[cmd] === "function"
          ? this.Commands[cmd](true).match(/##(.*)##/g)
          : this.Commands[cmd].match(/##(.*)##/g);

      // console.log(typeof tokens);
      if (tokens != null) {
        preview = tokens
          .join("")
          .replace(/#/g, "")
          .trim();
      }

      help += `\t[[;green;]${cmd.padEnd(15)}[[;gray;]${preview}\n`;
    });

    return help;
  }
}

export default CV;
