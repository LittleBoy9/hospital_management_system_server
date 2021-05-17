const mongoose = require("mongoose");

const dbcon = () => {
   const dbURL = "mongodb+srv://hospitalDB:2021project1@cluster0.5bblv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

   mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
   }).then(() =>
      console.log("Connection Successful")
   ).catch((err) =>
      console.log("Connection Not Successful " + err)
   );
}
export default dbcon;
