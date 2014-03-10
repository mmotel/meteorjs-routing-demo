
Meteor.subscribe("users");
Meteor.subscribe("categories");

// Meteor.startup(function () {
//   Deps.autorun(function () {

//   });
// });

Template.users.users = function (){
  return Meteor.users.find().fetch();
}

Template.user.events({
  'click button': function (){
    Session.set('selectedUser', this.name);
    Router.setUser(this.name);
  }
});

Template.categories.categories = function (){
  return Categories.find({owner: Session.get('selectedUser')}).fetch();
}

Template.categories.events({
  'click button#addCategoryBtn': function (event, template){
    // $('#addCategoryModal').modal('show');
    Session.set('showAddCategoryModal', true);
  }

});

Template.category.events({
  'click button': function (){
    console.log("category:" + this._id);
    Session.set("selectedCategory", this._id);
    Session.set("showDetailsCategoryModal", true);
    Router.setCategory(this.owner, this._id);
  }
});

Template.addCategoryModal.show = function (){
  return Session.get('showAddCategoryModal');
}

Template.addCategoryModal.events({
  'click .exit': function (){
    Session.set('showAddCategoryModal', false);
  },
  'click .save': function (event, template){
    var name = template.find("#addCategoryName").value;
    if(name.length > 0){
      Meteor.call("addCategory", name, Meteor.user().name);
      Session.set('showAddCategoryModal', false);
    }
  }
});

Template.detailsCategoryModal.show = function (){
  return Session.get('showDetailsCategoryModal');
}

Template.detailsCategoryModal.category = function (){
  return Categories.findOne({_id: Session.get("selectedCategory")});
}

Template.detailsCategoryModal.events({
  'click .exit': function (){
    Session.set('showDetailsCategoryModal', false);
    Router.setUser(Session.get("selectedUser"));
  }
});

//---! ROUTING !---

var CategoriesRouter = Backbone.Router.extend({
  routes: {
    ":userName/:category": "cat",
    ":userName": "main"
  },
  cat: function (userName, category){
    var oldUser = Session.get("selectedUser");
    var oldCategory = Session.get("selectedCategory");

    if( (oldUser !== userName) && (oldCategory !== category) ){
      Session.set("selectedUser", userName);
      Session.set("selectedCategory", category);
      Session.set("showDetailsCategoryModal", true);
    }
  },
  main: function (userName) {
    var oldUser = Session.get("selectedUser");

    if (oldUser !== userName) {
      Session.set("selectedUser", userName);
      // Session.set("tag_filter", null);
    }
  },
  setUser: function (userName) {
    this.navigate(userName, true);
  },
  setCategory: function (userName, category){
    this.navigate(userName + "/" + category, true);
  }
});

Router = new CategoriesRouter;

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});

