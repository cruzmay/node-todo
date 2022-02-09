const { createInterface, pause, input } = require("./helpers");
const { Tareas } = require("./models");
require("colors");

const main = async () => {
  const tareas = new Tareas();
  let opt;

  do {
    console.clear();
    console.log("======================".green);
    console.log("  escoja una opción".green);
    console.log("======================".green);
    console.log("\n");

    await createInterface().then((data) => (opt = data.opt));

    switch (opt) {
      case 1:
        await input("escriba una tarea").then((data) =>
          tareas.createTarea(data.input)
        );
        let arr = tareas.listArr();
        // console.log(arr);
        console.log(tareas.turnOnObject(arr));
        // console.log(tareas.list);
        break;
      case 5:
        break;
    }

    console.log("\n");
    await pause();
  } while (opt !== 0);
};
main();
