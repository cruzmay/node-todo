const Task = require("./task");
const fs = require("fs");

class Tareas {
  constructor() {
    this.list = {};
  }
  createTarea(desc) {
    const tarea = new Task(desc);
    this.list[tarea.id] = tarea;
  }
  listArr() {
    let arrList = [];
    Object.keys(this.list).forEach((data) => arrList.push(this.list[data]));
    return arrList;
  }
  turnOnObject(arr) {
    return (this.list = Object.assign({}, arr));
  }
}
module.exports = Tareas;
