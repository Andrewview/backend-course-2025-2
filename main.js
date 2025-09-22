const { URL, URLSearchParams } = require('url');


const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp";


const date = "20240801";     
const time_period = "m";     


const url = new URL(base);
url.search = new URLSearchParams({
    date: date,
    period: time_period,
    json: ""   
});


console.log(url.toString());
