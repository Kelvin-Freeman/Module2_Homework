// Load express
const express = require('express');

// Create our express app
const app = express();


app.get('/tip', (req, res) =>{
    res.send('')
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    
    const {total, tipPercentage} = req.params

    res.send(`Your total is $${total}, and the tip amount is $${tipPercentage}! Sorry about the inflation!`)
})



app.listen(3000, function () {
    console.log('Listening on port 3000');
})
