
Meteor.publish("users", function (){
	return Meteor.users.find({}, { fields: { _id: 1, emails: 1, name: 1 } });
});

Meteor.publish("categories", function (){
	return Categories.find({});
});

Accounts.onCreateUser(function(options, user) {

  // console.log("##@@$$ options");
    // console.log(options);
    // console.log("##@@$$ user");
    // console.log(user);
    // console.log("---***---")

  user.name = options.email;

  return user;
});