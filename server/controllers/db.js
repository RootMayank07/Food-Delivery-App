import mongoose from "mongoose"
export const connectDB = async () => {
    try{
        await 
        mongoose.connect("mongodb://greatstack:8273156708@ac-4x7ghgi-shard-00-00.7paq4eq.mongodb.net:27017,ac-4x7ghgi-shard-00-01.7paq4eq.mongodb.net:27017,ac-4x7ghgi-shard-00-02.7paq4eq.mongodb.net:27017/?ssl=true&replicaSet=atlas-ihpvhn-shard-0&authSource=admin&appName=Cluster0");
      console.log("DB Connected");
    }   catch(error) {
         console.log(error);
    }

};
