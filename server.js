const express = require("express");
const connectDB = require("./config/db");
require('dotenv').config();
// const path = require("path");
const app = express();
let domainName = "";

// if (process.env.STATUS === "production") {
//     domainName = "https://dev-connector-backend.vercel.app"
// }
const PORT = 4973;

//Connect Database
connectDB();

// init Middleware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.send("API Running"));

// Defining Routes
app.use(`/api/users`, require("./routes/api/users"));
app.use(`/api/auth`, require("./routes/api/auth"));
app.use(`/api/profile`, require("./routes/api/profile"));
app.use(`/api/posts`, require("./routes/api/posts"));

// Serve static assets in production
// console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
// if (process.env.STATUS == "production") {
    
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'api', 'index.js'));
//     })
// }

// else {
//     console.log("I am running and env is Development")
// }

// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

module.exports = app;

// "vercel-build": "npm install && npm install --prefix client && npm run server && npm run build --prefix client"