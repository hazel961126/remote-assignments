var express = require("express");
var app = express(); //呼叫 express application 物件
app.use(express.static("public"));

//Assignment1

app.set('view engine', 'pug');
app.get("/", function(req, res){
    res.render('index')
});


//Assignment2

app.get("/getData", function(req, res){
    // console.dir(req.url);
    let numer = 0;
    let n = parseInt(req.url.substring(16))
    if (req.url === '/getData'){
        res.send('Lack of Parameter');
    } else if (n > 0) {
        number = n * (n + 1) / 2;
        // console.dir(number);
        res.send(`${number}`);
    } else {
        res.send('Wrong Parameter');
}});



app.listen(3000, function(){
    console.log("Your server is created at http://localhost:3000/")
});












// app.get("/getData", function(req, res){
//     res.send("Lack of Parameter")
// });

//Assignment2
// app.get("/getData", (req, res, next) => {

// 	let n = parseInt(req.query.number);
	
// 	if (req.query.number === undefined){
// 		res.send("Lack of Parameter");
// 	} else if (isNaN(req.query.number)){
// 		res.send("Wrong Parameter");
// 	} else if ( n > 0 ) {
// 		let result = n * (n + 1) / 2;
// 		res.send(`${result}`); //result.toString //${result}
// 	}
// 	else {
// 		res.send("Wrong Parameter");	
// 	}
// });

