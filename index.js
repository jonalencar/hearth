'use strict'

const express = require('express');

const app = express();

app.use('/', (req, res) => {
	res.send('A home for my things...');
});

app.use((req, res) => {
	res.status(404).send(`<h2>Don't panic!</h2><p>Sorry, ${req.url} cannot be found most likely due to the website author's idiocy</p>`);
});
