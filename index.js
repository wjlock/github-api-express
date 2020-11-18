// Modules

const express = require('express');


// 



const axios = require('axios');
const { urlencoded } = require('express');

// Create the app
const app = express();


// Create a PORT (in prod use prod port, locally use 3000)
const PORT = process.env.PORT || 3000;

// Routes - Home
app.get('/', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/wjlock')
    .then(response => {
        // print inside terminal
        const willData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(willData)
        // send the object to the page
        res.send(willData);
    })
})

// Routes - Nitish

app.get('/other', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // print inside terminal
        const nitishData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(nitishData)
        // send the object to the page
        res.send(nitishData);
    })
})

// Routes - Alan

app.get('/alan', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/delayedaa')
    .then(response => {
        // print inside terminal
        const alanData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(alanData)
        // send the object to the page
        res.send(alanData);
    })
})

// Routes - Zach

app.get('/zach', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/zfinnan')
    .then(response => {
        // print inside terminal
        const zachData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(zachData)
        // send the object to the page
        res.send(zachData);
    })
})

// Routes - Donny


app.get('/donny', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/rykuno')
    .then(response => {
        // print inside terminal
        const donnyData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(donnyData)
        // send the object to the page
        res.send(donnyData);
    })
})

// Routes - Juri

app.get('/juri', (req, res) => {



    // Access API endpoint from github
    axios.get('https://api.github.com/users/juriahn')
    .then(response => {
        // print inside terminal
        const juriData = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name

        }
        // log the object in the terminal
        console.log(juriData)
        // send the object to the page
        res.send(juriData);
    })
})


// Listen on a PORT
app.listen(PORT, () => {
    console.log(`server is running PORT ${PORT}`)
});


