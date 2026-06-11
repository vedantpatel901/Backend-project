const { Serverconfig, Logger } = require('./config');

const express = require('express');
const apiRoutes = require('./routes');
const app = express();

app.use(express.json()); // it is used in postman to send the ata in json format and it is used to parse the data in json format 
app.use(express.urlencoded({extended: true})); // it is used to parse the data in urlencoded format and it is used in postman to send the data in urlencoded format
app.use('/api' , apiRoutes);


app.listen(Serverconfig.PORT, async () => {
    console.log(`Server is running on port ${Serverconfig.PORT}`);
    Logger.info('server is running fine');

    // const {City , Airports} = require('./models');
    // const city = await City.findByPk(1);
    // console.log(city);
    // // const airport = await Airports.create({
    // //     name : 'Ahemdabad international airport',
    // //     code : 'AHM',
    // //     cityId : 6,
    // //     address : 'Ahemdabad, Gujarat'
    // // }) 
    // // await city.createAirport({
    // //     name : 'Gandhinagar international airport',
    // //     code : 'GIA',
    // //     address : 'Gandhinagar, Gujarat'
    // // })

    // await city.getAirports().then((airports) => {
    //     console.log(airports);
    // })
}); 