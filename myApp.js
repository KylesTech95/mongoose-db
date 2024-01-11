//https://cloud.mongodb.com/
require('dotenv').config();
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// CRUD - Create (part 1)
// Create person Schema
let Person;
const Schema = mongoose.Schema;
// synonymous to: create table(column type etc...)
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
// store model in variable called Person
 Person = mongoose.model("Person", personSchema);

 // create document instance of Person model
const createAndSavePerson = (done) => {
  const kyleZu = new Person({
    name: "Kyle Zu",
    age: 22,
    favoriteFoods:["hamburger","salad"]
  })
  //save kyleZu
  kyleZu.save(function(err,data){
    err ? console.log(err) : done(null,data)
  })
};
// create an array of people that confirm the types from Person Model
const arrayOfPeople = [
  {name: "Kyle Zu",age: 22,favoriteFoods:["hamburger","salad"]},
  {name: "Sally Ho",age: 30,favoriteFoods:["salmon","watermelon","chicken"]},
  {name: "Mike Gains",age: 42,favoriteFoods:["duck","ham","spinach"]}
]
// model.create() to create many people
const createManyPeople = function(arrayOfPeople,done){
  // Model.create taken in (array,callbackFn())
  Person.create(arrayOfPeople,function(err,data){
  //return uoutcome of creating people
  return err ? console.log(err) : done(null,data)
  })
} 
// model.find() to find people
const findPeopleByName = function(personName, done){
  // model.create taken in ({name:argument},callbackFn())
  Person.find({name: personName},function(err,found){
  return err ? console.log(err) : done(null,found)
  })
};
// model.findOne() -  find one foood
const findOneByFood = function(food, done){
  Person.findOne({favoriteFoods:food},function(err,food){
  return err ? console.log(err) : done(null,food)
  })
};
// model.findById()
const findPersonById = function(personId, done){
  Person.findById(personId,function(err,foundById){
    return err ? console.log(err) : done(null,foundById)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;