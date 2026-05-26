const {AirplaneRepository} = require('../respositories')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    console.log("inside airplane service");
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(error){
        throw error;
    }
}

module.exports = {
    createAirplane
}