var connection = require('./db')

exports.selectDrama = function(cb){
    connection.query('SELECT * FROM drama', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.insertDrama = function(body, cb){
    sql = 'INSERT INTO drama (title, actor) VALUES(?, ?)';
    values = [body.title, body.actor];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    })
}