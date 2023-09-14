import mongoose from 'mongoose';

const Connection = async ()=>{
    const URL = process.env.MONGO_URI;
    try {
        await mongoose.connect(URL, {useUnifiedTopology : true , useNewUrlParser : true});
        console.log('db connected')
    } catch (error) {
        console.log('Error while connecting with db',error);
    }
}

export default Connection;