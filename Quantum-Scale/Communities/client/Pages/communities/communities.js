import { MongoClient } from "../../../../../node_modules/mongodb";

let postDate ;
let postAuthor ;
let postTitle ;
let postText ;
let postMedia;
let communityName ;

document.getElementById("community-name").textContent = "The Game"

//createPostPopUp
const view = document.body;
const postPopUp = document.createElement("div");
//const postPopUpLabel = document.createElement("label");
//postPopUpLabel.textContent = ("Enter a Suitable Title:");

const postPopUpTitleInput = document.createElement("input");
postPopUpTitleInput.placeholder = "Enter a Suitable Title";
postPopUpTitleInput.id = "title-input";

const postPopUpTextInput = document.createElement("input");
postPopUpTextInput.placeholder = "Enter your message";
postPopUpTextInput.id = "text-input";

const buttonSpan = document.createElement("span");

const postPopUpButton = document.createElement("button");
postPopUpButton.textContent = "Send";
postPopUpButton.id = "post-button";

const postPopUpBack = document.createElement("button");
postPopUpBack.textContent = "Exit";

//const postPopUpMedia = document.createElement("button");
//postPopUpMedia.textContent = " Upload Media";

const communityLayout = document.getElementById("community-layout");
//const tabs = document.getElementsById();

//createPostPopUp styles
postPopUp.style.display = "flex";
postPopUp.style.flexDirection = "column";
postPopUp.style.gap = "20px";
postPopUp.style.display = "flex";
postPopUp.style.marginBottom = "30px";
postPopUp.style.border = "5px solid white";
postPopUp.style.borderRadius = "15px";
postPopUp.style.color = "white";
postPopUp.style.padding = "10px";

buttonSpan.style.paddingLeft = "50px";

postPopUpButton.style.width = "100px";
postPopUpButton.style.height = "50px";
postPopUpButton.style.marginLeft = "220px";
postPopUpButton.style.marginBottom = "10px";

//postPopUpMedia.style.backgroundColor = "green";
//postPopUpMedia.style.weight = "100px";
//postPopUpMedia.style.height = "50px";
//postPopUpMedia.style.marginBottom = "10px";

postPopUpBack.style.backgroundColor = "red";
postPopUpBack.style.width = "100px";
postPopUpBack.style.height = "50px";
postPopUpBack.style.marginBottom = "10px";
postPopUpBack.style.marginLeft = "50px";

postPopUpTextInput.style.height = "250px";

postPopUp.append(postPopUpTitleInput);
postPopUp.append(postPopUpTextInput);
//postPopUp.append(postPopUpMedia);
postPopUp.append(buttonSpan);
buttonSpan.append(postPopUpBack);
buttonSpan.append(postPopUpButton);

//create the post pop up and remove the community layout
function createPostPopUp(){
view.append(postPopUp);
communityLayout.style.display = ("none");
};

/*the pop up will include an upload media button to allow the user to add media from 
their desktop */

//document.getElementById("");
  //the media can take images with the same ratios as instagram photos
  //the media can take videos with the same ratios as instagram reel and youtube videos


//once the send button is clicked:
//step 1: Assign the user as the Author in the post Schema

//step 2: Assign the title as the Title in the post Schema

//step 3: Assign the text as the Text in the post Schema

//step 4: Assign the current date as the date in the post Schema

//step 5: Update the feed of the active-tab

//step 6: remove the post pop up and return the community layout

//users can double click on a post to like the post
//document.getElementById("").addEventListener;

//posts with the most likes can be pinned to the top of the active bar for other users to see
// function popularPost(){};
// function popularPost();

//post author is the user responsible for creating the post after a post has been made
//function getUserName(){};
//function getUserName();
//self.User.name = postAuthor;

//the user must enter the title of the post for the post to be valid
//document.getElementById("").innerHTML = postTitle;

//the user must add the text of the post in either paragraph form

//or media format with a caption that will be the text
//document.getElementById("").addEventListener;

//the community name is obtained from the relevant community in the collection
//function getCommunityName(){};
//function getCommunityName();

//the community name must be displayed in the DOM in the header location
//document.getElementById("community-name").textContent = communityName;

//the date of the post must be taken from the relevant post in the collection
//function getPostDate(){};
//function getPostDate();

//the date of the post must be displayed in the DOM
//document.getElementById("post-date").textContent = postDate;

//the post author must be taken from the relevant post-author in the collection
//postAuthor = function getUserName();

//the author of the post must be displayed in the DOM
//document.getElementById("post-author").textContent = postAuthor;

//the title of the post must be taken from post-title in the collection
//postTitle = function getPostName();

//the title of the post must be displayed in the DOM
//document.getElementById("post-title").textContent = postTitle;

//the content of the post must be taken from the post-content in the collection
//function getPostContent(){};
//function getPostContent();

//the content of the post must be displayed in the DOM
//postContent = function getPostContent();
//document.getElementById("post-content").textContent = postContent;

//posts must be appended to the active-tab section in the DOM

//Newer posts must be displayed at the top of the active-tab
//function updatePosts(){};
//function updatePosts(){};

//users must click on the comment-input to type out their comments
//document.getElementsByClassName.innerHTML = comment

//users must click the enter button to send their comment on the given post
//document.getElementByClassName.addEventListener;


//webinars can be built with an API

//the webinar API must fetch the date and links of any upcoming webinars

//the upcoming webinars must be displayed in the upcoming webinar section

//any available upcoming webinars should be added to the DOM in the upcoming webinars section
