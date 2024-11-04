const fs = require('fs')

fs.readFile('calc.js','utf-8',function(err,data){
    console.log(err)
    console.log(data)
})

fs.open('calc.js','w',function(err,file){
    console.log(err)
    console.log(file)
})