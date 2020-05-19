var express = require('express');
var app = express();
var file = require('fs');
var bodyparser = require('body-parser');
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
 app.get('/whoiam/:name', function (req, res) {
    var name = req.params.name;
        var output;
       console.log( name );
       if (name == 'jey') {
           output = name + " is NEC Alumni" ;
       } else {
         output = name + " is current student" ;
       }
       res.end( JSON.stringify(output));
    });
    app.get('/student',function(req,res){
        const student = file.readFileSync('student.json');
        const studentobj = JSON.parse(student);
        res.end(JSON.stringify(studentobj));

    });
    app.post('/add',function(req,res){

        const reqdata = req.body;
        console.log("get the student from request",reqdata);
        res.end(JSON.stringify("student data has been updated"));
        
    });