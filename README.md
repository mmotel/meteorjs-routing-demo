# MeteorJS & Backbone: Routing Demo

### Live demo

Go and see live demo at [backbone-routing-demo.meteor.com](http://backbone-routing-demo.meteor.com).

### Meteor & [Atmosphere](https://atmosphere.meteor.com/) packages management

```sh
meteor add jquery
meteor add account-ui
meteor add accounts-password
meteor add backbone
mrt add bootstrap-3
meteor remove insecure
meteor remove autopublish
```

###Application structure

```
model.js
smart.json
public/
client/
		client.js
		index.html
		styles.css
server/
		server.js		
```

###Run application

```sh
meteor
````

## Routing

When there is `selectedUser` in url bar address is set into `/userName`. 

For example:  [ `backbone-routing-demo.meteor.com/mmotel@test` ](http://backbone-routing-demo.meteor.com/mmotel@test) .

When tehre is `selectedCategory` in url bar address is set into `/userName/category_id`. 

For example:  [ `backbone-routing-demo.meteor.com/mmotel@test/txjYRcKAQrwMbenbZ ` ](http://backbone-routing-demo.meteor.com/mmotel@test/txjYRcKAQrwMbenbZ) .
