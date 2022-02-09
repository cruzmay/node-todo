const inquirer = require("inquirer");
require("colors");

const pause = async () => {
  const pause = inquirer.prompt([
    {
      type: "input",
      name: "pause",
      message: `presiona ${"enter".green} para continuar:`,
    },
  ]);
  return pause;
};

module.exports = pause;
