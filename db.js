const mongoose= require('mongoose');
const mongoURI= 'mongodb+srv://swati:mongodb%401206@cluster0.awnet7i.mongodb.net/inotebook?retryWrites=true&w=majority';

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongo")
    })
}

module.exports= connectToMongo;