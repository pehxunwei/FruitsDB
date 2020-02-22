const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    //favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

//fruit.save();

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

//pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

//person.save();

Fruit.find(function(err,fruits){
    if (err){
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.deleteMany({name: "Apple"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all the documents");
//     }
// });

// Person.deleteOne({"name": "Amy"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all the documents");
//     }
// });