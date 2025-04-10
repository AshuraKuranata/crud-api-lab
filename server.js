const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Coffee = require('./models/coffee.js')
const cors = require('cors')

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

// MiddleWare
app.use(cors());
app.use(express.json());

// Routes Below

app.get('/coffee', async (req, res) => {
    const coffeeList = await Coffee.find();
    res.json(coffeeList)
})

app.post('/coffee', async (req, res) => {
    const newCoffee = await Coffee.create(req.body);
    res.json(newCoffee)
})

app.delete('/coffee/:coffeeId', async (req, res) => {
    const deleteCoffee = await Coffee.findByIdAndDelete(req.params.coffeeId);
    res.json(deleteCoffee)
})

app.put('/coffee/:coffeeId', async (req, res) => {
    const updateCoffee = await Coffee.findByIdAndUpdate(
        req.params.coffeeId,
        req.body,
        {new: true}
    );
    res.json(updateCoffee)
})

app.listen(3020, () => {
    console.log(`Express app ready at port 3020`)
})