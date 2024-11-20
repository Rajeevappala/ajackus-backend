const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const cors = require('cors')

const router = require("./routes/UserRoute")

const PORT = process.env.port || 3000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log(error))

app.use(router)

app.listen(PORT , () => (
    console.log(`Server Connected on port ${PORT}`)
))



