import express from 'Express';
 const app = express();
 const fetch = require('node-fetch');


 app.get('/api/getWeatherData', async (req,res) =>{
     try{
        fetch('https://api.weatherstem.com/api', {
            method: 'post',
            body:JSON.stringify({
                api_key:'zjf6gpop',
                stations:['uf@alachua.weatherstem.com'],
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => console.log(json));
     }
     catch(error){
console.log(error);
     }
 });

 app.listen(4000, () => {

    console.log("Created express server running on port 5000")
 });