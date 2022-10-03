const express = require('express')

const app = express()
// const PORT = 3000

// const names = ['John', 'Mike']


app.get('/', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
})

app.get('/:name', (req, res) =>{

    const {name} = req.params

    res.send(`<h1>Wow! Hello there, ${name}</h1>`)
})


app.listen(3000, function () {
    console.log('Listening on port 3000');
})


// ==========================

// app.get('/tip', (req, res) =>{
//     res.send('')
// })

// app.get('/tip/:total/:tipPercentage', (req, res) => {
    
//     const {total, tipPercentage} = req.params

//     res.send(`Your total is $${total}, and the tip amount is $${tipPercentage}! Sorry about the inflation!`)
// })



// app.listen(3000, function () {
//     console.log('Listening on port 3000');
// })

