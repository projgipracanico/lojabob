const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user:'sql10701770',
    password:'uh4Vi5Y7dZ',
    database:'sql10701770'
})

connection.connect()

//Inserir dados - insert into nometabela

function inserir(lg,sn,mail) {
    let sql = "insert into users set ?"
    let dados = {login:lg, senha:sn, email:mail}

    connection.query(sql, dados, function (error, results, fields){
        if(error) throw error
        console.log("Cadastro com sucesso!")
    })
}

inserir ("Giovana", "12345", "gigica@gmail.com")

connection.end()