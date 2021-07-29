const Database = require('../db/config')



module.exports ={
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let isRoom = true

        while(isRoom){

            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random()*10).toString() : 
                roomId += Math.floor(Math.random()*10).toString()
                roomId = parseInt(roomId)
            }
            // Verificando se o numero ja existe
    
            const roomsExistIds = await db.all(`SELECT id FROM rooms`) //db.all é utilizado para quando a query tem algum retorno
    
            isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)
    
            if(!isRoom){
    
                // Inseri a sala no banco de dados
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                )VALUES(
                    ${roomId},
                    "${pass}"
                )`)
                
            }
        }

        await db.close()
        
        res.redirect(`/room/${roomId}`)
    },
    //inserindo dinamicamente o numero da sala no icone
    open(req, res){
        const roomId = req.params.room
        res.render("room", {roomId: roomId})
    }
}