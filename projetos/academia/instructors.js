const fs = require('fs')
const data = require('./data.json')
exports.post = function(req, res){
	const keys = Object.keys(req.body)
	for(key of keys){
		if(req.body[key] == ""){
			return res.send("Preencha os campos")
		}
	}
	req.body.birth = Date.parse(req.body.birth)
	req.body.created_at = Date.now()
	req.body.id = Number(data.instructors.length + 1)
	data.instructors.push(req.body)
	fs.writeFile("data.json", JSON.stringify(data, null, 2), 'utf8', function(err){
		if(err){return res.send("Erro ao salvar os dados")} 
		return res.send('instructors/create')
	})
	//return res.send(req.body)
}


// function(err){
// 	if(err){return res.send("Erro ao salvar os dados")} 
// 	console.log('Nao deu erro')
// 	return res.redirect("/instructors")
//}