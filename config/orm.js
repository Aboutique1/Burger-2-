var connection = require('./connection').default
require('dotenv').config()

function selectAll (){
    connection.query('SELECT * FROM burgers;', function (error, results, fields) {
    if (error) throw error 
    console.log(results)
    return
})
        
} 
 
function insertOne (burgerType){
    connection.query('insert into burgers (burger_name,devoured) values ("' + burgerType +'",false);', function (error, resuls, fields){
        if (error) throw error
        return

    })

}

function updateOne (burgerType){
    connection.query('update burgers set devoured = true where ("' + burgerType +'",false);', function (error, resuls, fields){
        if (error) throw error
        return

    })

}

selectAll()

insertOne("mcRib")
insertOne("bigMac")

selectAll()