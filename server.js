// const express = require('express');

// const app = express();
// // const PORT = 3000;

// // app.get('/magic', function(request, response) {
// //     response.send('<h1>Hello to you! Will I be a millionaire?</h1>')
// // })

// const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// // Routes
// app.get('/', (req, res) => {
//     console.log(req.params);
//     res.send('<h1>Hello</h1>')
    
// })

// app.get('/magic',  (req,res) => {
//     return phrases[Math.floor(Math.random() + magic.length)]; 
// })

// // console.log(magic(phrases));

// // app.get('/magic/Will I be a millionaire', (req, res) => {
// //     const {indexOfMagicArray} = req.params;

// //     res.send(magic[indexOfMagicArray])

// // app.get('/magic/:question', (req, res) => {
// //     const {indexOfMagicArray} = req.params;
// //     // console.log(req.params)
// //     console.log(req.params.indexOfMagicArray)
// //     res.send(magic[indexOfMagicArray])
// // })

// // app.get('/fixed/:indexOfMagicArray', (req, res) => {
// //     const {indexOfMagicArray} = req.params;

// //     res.send('yes' + indexOfMagicArray)
// // })


// // app.get('/magic/:question', (req, res) => {
// //     const {question} = req.params
// //     console.log(req.params);
// //     console.log(req.query);

// //     for (let quest of magic){
// //         console.log(quest);
// //         if (quest === question){
// //             console.log(question);
// //             return res.send(`Welcome ${question}`)
// //         }else{
// //             console.log('I don\'t know')
// //         }
// //     }

// // app.get('/magic/:indexOfMagicArray', (req, res) => {
// //     console.log(req.params);
// //     res.send(magic)
// // })

// // app.get('/magic/:indexOfMagicArray', (req, res) => {
// //     const {indexOfMagicArray} = req.params;
// //     // console.log(req.params)
// //     // console.log(req.params.indexOfMagicArray)
// //     res.send(magic[indexOfMagicArray])
// // })

// // // app.get('/fixed/:indexOfMagicArray', (req, res) => {
// // //     const {indexOfMagicArray} = req.params

// // //     if (magic[indexOfMagicArray]){
// // //         res.send(magic[indexOfMagicArray])
// // //     } else {
// // //         res.send('Cannot find that index: ' +  indexOfMagicArray)
// // //     }
// // // })

// app.listen(3000, function() {
//     console.log(`Server is listening on port: 3000`);
// })

const express = require('express')
const app =  express()
const magic = require('./models/magic')
// port = 3000

app.set('views', 'ejs')
app.set('views', './Views')
app.get('/greetings/', (req,res) => {
    res.send('Hello , Stranger.')
})



app.get('/magic/:question', (req,res) => {
    // req.body
    res.json(magic[6])

})

app.get('/greetings/:name', (req,res) => {
    req.params.name
    res.send(`Hello ${req.params.name}, It is so nice to see you!!!`)
})
app.get('/tip/:total/:tips', (req,res) => {
  req.params.total
    req.params.tips
 res.send(`your tip is ${req.params.tips}`)
  
})
// app.listen(port, () => {
//     console.log(`Running on port ${port}....!!!`);
// })

app.listen(3000, function() {
    console.log(`Server is listening on port: 3000`);
})