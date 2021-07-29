const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()
        // async e await trabalham juntos. Vale lembrar que sempre que usarmos o await numa função a funçaõ tem que ser async

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`)
    
        await db.exec(`
        CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT 
        )`);

        await db.close()
    }
}

initDb.init();


