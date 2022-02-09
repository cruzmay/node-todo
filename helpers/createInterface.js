const inquirer = require("inquirer");

const question = [
  {
    type: "list",
    name: "opt",
    message: "¿que quieres hacer?",
    choices: [
      {
        value: 1,
        name: "crear tarea",
      },
      {
        value: 2,
        name: "listar tareas",
      },
      {
        value: 0,
        name: "salir",
      },
    ],
  },
];

const createInterface = async () => {
  return await inquirer.prompt(question);
};
module.exports = createInterface;
