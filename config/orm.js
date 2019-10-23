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

function updateOne (burgerID){
    connection.query('update burgers set devoured = true where id='+ burgerID +';', function (error, resuls, fields){
        if (error) throw error
        return

    })

}

selectAll()

insertOne("mcRib")
insertOne("bigMac")
updateOne(1)
updateOne(2)
updateOne(3)

selectAll()