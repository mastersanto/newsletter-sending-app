import mongoose from 'mongoose';
 
export default function connectDB() {
  const url = 'mongodb+srv://storiadmin:storiadmin1234@cluster0.ghbxpmr.mongodb.net/stori-newsletter?retryWrites=true&w=majority&appName=Cluster0';
  
  try {
    mongoose.connect(url);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
  });
}