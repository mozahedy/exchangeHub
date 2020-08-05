const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:root@root@cluster0.lpe0u.mongodb.net/Cluster0?retryWrites=true&w=majority';

connectDB = async ()=>{
    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected . . .');
    } catch(e){
        console.log('Error in database connection.', e);
    }
    
}

module.exports = connectDB;