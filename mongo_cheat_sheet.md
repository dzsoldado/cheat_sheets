# MongoDB Commands 

### Start mongodb on linux
sudo service mongod start

### Print the exesting databases
show dbs

### Print the exesting collections
show collections

### Switch to / Create database
use dbname

### Print current database
db

### Create new users
db.createUser({
  user:"admin2",
  pwd:"admin2",
  roles: [ "readWrite" , "dbAdmin"]
});

### Create new collection
db.createCollection('collectionName');

### Insert documents 
db.collectionName.insert( { name : "John Doe" } );
db.collectionName.insert( [ { name : "Jane Doe" } , { name : "john Smith" , age : 44 } ] ); 

### Return all the documents of the collection 
db.collectionName.find(); 
db.collectionName.find().pretty(); // Cleaner view

### Update / Add fields to exesting documents
db.collectionName.update( { name:"Jane Doe" } , { name : "Mbarka Mebrouka" , age : 24 } );

### Increment
db.collectionName.update( { name : "Jane Doe" } , { $inc : { age : 4 } } );

### Update specific fields
db.collectionName.update( { name : "Jane Doe" } , { $set: { age : 44 } } );

### Remove a field 
db.collectionName.update( { name : "John Smith" } , { $unset : { age : 1 } } );

### Add if non existant
db.collectionName.update( { name : "James Rodriguez" } , { name : "James Rodriquez" , age : 13 } , { upsert : true} );

### Rename a field
db.collectionName.update( { name : "James Rodriguez"}  , { $rename : { "age" : "Trophies" } } );

### Remove documents
db.collectionName.remove( { name : "John Smith" } );

### Search 
db.collectionName.find( { name : "James Rodriguez" } );

### Search with restriction ( name : 1 => return field, : 0 => return all fields except this)

db.collectionName.find( { "nom" : "James Rodriguez" } , { "Name" : 1 , "Trophies" : 1 } )

### Search with Or
db.collectionName.find( { $or: [ { name : "John Doe" } , { name : "James Rodriguez" } ] } );

### Search lt (less than) gt (greater than) lte (less than or equal) gte (greater than or equal)
db.collectionName.find( { age : { $lt : 40 } } );
db.collectionName.find( { age : { $gt : 40 } } );

db.collectionName.find( { "Trophies.champions_league" : " 13 " } ); // quotes are necessary

### Sort ( 1 ascending , -1 descending )
db.collectionName.find().sort( { age : 1 } );

### Count 
db.collectionName.find().count();

### Limit result
db.collectionName.find().limit(10);

### For each
db.collectionName.forEach( function(doc) { print("User's name : " + doc.name ) } );
