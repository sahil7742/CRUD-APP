// step 2> Schema creation  for adding data to database
import mongoose from "mongoose";
const VcardSchema = new mongoose.Schema({
    name:{type:String , required: true},
    contact:{type:String , required: true},
    image:{type:String , required:true}
})
// for edit the column of database we use this code and refresh our local host
// delete mongoose.connection.models['Vcard']
// creating model and exporting it.
export default mongoose.models.Vcard || mongoose.model("Vcard",VcardSchema)
