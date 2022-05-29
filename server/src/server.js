

const PORT = process.env.PORT || 8000;
// console.log(PORT);

const app = require('./app');


const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');


const {loadPlanetsData} = require('./models/planets.model')
const {loadLaunchData} = require('./models/launches.model')

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;



mongoose.connection.on('open', ()=>{
    console.log('MongoDB connection ready!!');
});
mongoose.connection.on('error', (err) =>{
    console.error(err);
})

async function startServer(){
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    await loadLaunchData();
};


server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});

startServer();

