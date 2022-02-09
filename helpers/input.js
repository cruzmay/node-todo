const inquirer = require("inquirer");

const input = async (message) => {
  const input = inquirer.prompt([
    {
      type: "input",
      name: "input",
      message,
      validate(value) {
        if (value.length <= 0) {
          throw "debe escribir algo";
        }
        return true;
      },
    },
  ]);
  return await input;
};
module.exports = input;
