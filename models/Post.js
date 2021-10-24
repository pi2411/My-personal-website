const mongoose = require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');
// const findOrCreate = require('mongoose-findorcreate');
mongoose.connect("mongodb+srv://process.env.CLINET_ADMIN:process.env.CLINET_ADMIN_SECRET@cluster0.es7mi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);


const postSchema = new mongoose.Schema({
  title:String,
  content:String,
})
// postSchema.plugin(passportLocalMongoose);
// postSchema.plugin(findOrCreate);
 module.exports = mongoose.model("post",postSchema);
