const { MongoClient } = require("mongodb"); 

//connection to mongodb atlas database


console.log("connected");
//const uri = "mongodb+srv://Muna:ImendaLikanya123@communities.nv8as.mongodb.net/?retryWrites=true&w=majority&appName=Communities";
//const client = new MongoClient(uri);


//users login
//login form must appear if the user is not logged in
//route the user to the login page
//the user must fill in a valid email address
//the user must fill in a password that matches the email address

//user sign up
//if the user does not have an account the user must be click on the button labeled " sign up"
/*the user will be taken to a page where they can fill out the required details 
needed for a user to be created according to the user schema */
/*the user name, email address, password must be taken from the form and added to the 
user collection if the form entry is valid*/

//fetching posts
//function fetchPosts(){};
//function fetchPosts();
/*when on the main feed, posts from the posts collection in mongodb should 
be displayed in the active tab from newest to oldest */
/* the date, author, title and content of the post should all be taken from the post collection
and displayed in their relevant location*/

//creating posts
//function createPost(){};
//function createPost();
/*all details from the pop box should be taken and added to the database*/
/*once a new post has been to the database the post should be taken from the 
collection and added to the active tabs section of the communities view*/

//get the active user
/*async function run(){
try{
const database = client.db("communities");
const user = communities.collection("users");
}}

//upcoming webinars
/* an api should be added to allow the hosts of the communities to schedule webinars
for their community members to attend*/
//upcoming webinars should be fetched from their desired calendar
//fetched upcoming webinars should be displayed in the upcoming-webinars section