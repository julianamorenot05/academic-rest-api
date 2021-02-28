/** packages */
const mongoose = require("mongoose"); 

/** using schemas */
const schema = require("../schemas/group.schema"); 

schema.statics = {//objeto json que permite definir varias funciones 
    create: function (data, cb){ //cb=callback
        let doc = new this(data);    //this hace referencia al schema 
        doc.save(cb); 
    },
    getAll: function (query, cb){ 
        this.find(query, cb); 
    },
    getByCode: function (query, cb){ 
        this.find(query, cb); 
    },
    update: function (query, data, cb){ //data sirve para actualizar la info 
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb); 
    }, 
    delete: function (query, cb){
        this.findOneAndDelete(query); 
    }
};



const dto = mongoose.model("coll_group", schema); 
module.exports = dto; 