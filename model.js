/*
  Categories {
    name: String,
    owner: String or Id
  }
*/

Categories = new Meteor.Collection('categories');

Categories.allow({
  'insert': function (userId, list){
    return false; //use Meteor.methods 
  },
  'update': function (userId, list, fields, modifier){
    return false;
  },
  'remove': function (userId, list){
    return false;
  },
});

Meteor.methods({
  addCategory: function (name, owner){
    Categories.insert({'name': name, 'owner': owner});
  }
});