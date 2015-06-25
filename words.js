var WordGenerator = require('wordgenerator');
var generator = new WordGenerator();

function nik(){ 
  	generator.generate({num : 2 },function(err,words){
		var randWords = words;
		console.log(randWords);
	});
}

setInterval(nik , 3000);


console.log(generator.words);
