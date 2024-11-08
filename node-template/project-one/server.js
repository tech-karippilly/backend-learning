const express = require('express')
const app = express()

const PORT =3000;
const BaseURL = "http://localhost"

app.set('view engine','pug');
app.set('views','views')

app.get('/',(req,res)=>{
    res.status(200).send('Server is running ...')
})

app.get('/cards',(req,res)=>{
    const items =[
        {title:'Card1',description:'Testing card One'},
        {title:'Card2',description:'Testing card two'},
        {title:'Card3',description:'Testing card three'},
        {title:'Card4',description:'Testing card four'},
        {title:'Card5',description:'Testing card five'}
    ]

    res.render('cards',{title:'Card Example',items})
})

app.get('/button',(req,res)=>{
    res.render('button',{title:'Button Example'})
})

app.get('/table',(req,res)=>{
    res.render('table',{title:'Table Example'})
})



app.listen(PORT,()=>{
    console.log(`Server is running ${BaseURL}:${PORT}`)
})