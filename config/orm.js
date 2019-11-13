var connection = require('./connection').default
require('dotenv').config()

module.exports.select =function selectAll (callback){
    connection.query('SELECT * FROM burgers;', function (error, results, fields) {
    if (error) throw error 
    callback(results)
    return 
})
        
} 
 
module.exports.insert =function insertOne (burgerType){
    if (burgerType=="") return;
    connection.query('insert into burgers (burger_name,devoured) values ("' + burgerType +'",false);', function (error, resuls, fields){
        if (error) throw error
        return

    })

}

module.exports.devour =function updateOne (burgerID){
    connection.query('update burgers set devoured = true where id='+ burgerID +';', function (error, resuls, fields){
        if (error) throw error
        return

    })

}
