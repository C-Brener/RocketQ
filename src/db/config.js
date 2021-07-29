const sqlite3 = require("sqlite3");
const { open } = require("sqlite") // como só necessitamos de uma funcionalidade dentro desse modulo usamos as chaves para atribuir a funcionalidade ao seu proprio nome e desta forma não necessitamos usar todo o modulo


module.exports = () =>
    open({
        filename:'./src/db/rocketq.sqlite', //Caminho do DB
        driver: sqlite3.Database,
    });
