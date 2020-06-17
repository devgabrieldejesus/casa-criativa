const sqlite3 = require('sqlite3').verbose(); // comunicar algumas coisas no terminal...
const db = new sqlite3.Database('./ws.db'); // novo objeto

db.serialize(function() {
    // Criar a tabela
    // db.run(`CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT
    //     )
    // `)

    // // Inserir dado na tabela
    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES (?,?,?,?,?);
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2728/2728995.svg",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate repellendus",
    //     "https://google.com.br"
    // ]

    // db.run(query, values, function(err) {
    //     if (err) return console.log(err)

    //     console.log(this)
    // })


    // // Consultar dados na tabela
    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })


    // // Deletar um dado da tabela
    // db.run(`DELETE FROM ideas WHERE id = ?`, [5], function(err) {
    //     if(err) return console.log(err)

    //     console.log("DELETEI", this)
    // })
    

})

// exportar o banco de dados
module.exports = db