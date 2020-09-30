const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitsSchema);
const apple = new Fruit({
  name:"Apple" ,
  rating:8,
  review: "Good"
});
const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "bitter"
});
const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Sweet"
});

// Fruit.insertMany([apple,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved");
//   }
// });

Fruit.find(function(err, fruits){
    if(err){
      console.log(err);
    }else{
      // console.log(fruits[i].name);
      mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }

});
