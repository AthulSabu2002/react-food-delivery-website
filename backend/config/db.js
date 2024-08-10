import mongoose from "mongoose";


const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ", connect.connection.host, connect.connection.name)
    }
    catch(err){
        console.log(err);
        process.exit();
    }
};

export default connectDb;