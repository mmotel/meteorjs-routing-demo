# MeteorJS & Backbone: Routing Demo

### Meteor & Atmosphere packages management

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

When tehre is `selectedCategory` in url bar address is set into `/userName/category_id`. 
