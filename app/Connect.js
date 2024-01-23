// STEP 1> for connection in mongodb(dataBase)
import mongoose from "mongoose"
const Connect = async () =>{
    try {
        return await mongoose.connect("mongodb://localhost:27017")
    }
    catch(err){
        throw new Error ("DB connection lost")
    }
}
export default Connect;
