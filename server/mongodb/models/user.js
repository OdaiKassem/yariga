import mongoose from "mongoose";



const UserSchema = new mongoose.Schema ({
name : {type: String , required: true},
email: {type: String , required: true},
avatar: {type: String , required: true},
allproperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'property'}]

})

 const userModel = mongoose.model('user', UserSchema);
 export default userModel;