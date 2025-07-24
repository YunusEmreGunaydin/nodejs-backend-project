const mongoose = require("mongoose");

const schema = mongoose.Schema({
       role_name:{type: String,required: true}, // type mongoose.SchemaTypes.String yazmakla String yazmak aynı anlama geliyor.
       is_active:{type: Boolean, default: true},
       created_by:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
       }

},{
    versionKey: false,
    timestamps:{
        createAt:"create_at",
        updateAt:"update_at"
    }

});

class Roles extends mongoose.Model{

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles",schema);
