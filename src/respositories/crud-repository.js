const {Logger} = require("../config/logger-config")

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        console.log("inside crud repository");
        try{
            const respone = await this.model.create(data);
            return respone;
        }catch(error){
            Logger.error("Error while creating in crud repository");
            throw error;
        }
    }

     async destroy(data){
        try{
            const respone = await this.model.destroy({ where:{
              id: data
            } });
            return respone;
        }catch(error){
            Logger.error("Error while destroying in crud repository");
            throw error;
        }
    }

    async getdata(data){
        try{
            const respone = await this.model.findOne({ where: { id: data } });
            return respone;
        }catch(error){
            Logger.error("Error while fetching data in crud repository");
            throw error;
        }
    }

     async getdatabypk(data){
        try{
            const respone = await this.model.findByPk( data );
            return respone;
        }catch(error){
            Logger.error("Error while fetching data in crud repository");
            throw error;
        }
    }

    async update(id, data){
        try{
            const respone = await this.model.update(data, 
                { where: 
                    { id } 
                });
            return respone;
        }catch(error){
            Logger.error("Error while updating data in crud repository");
            throw error;
        }
    }
}


module.exports = CrudRepository;