// This code is used to include the HTML code from navigation-component.html into the current HTML file
fetch("../components/navigation-component.html")
.then((response) => response.text())
.then((data) => {
  const navigationContainer = document.getElementById("navigation");
  navigationContainer.innerHTML = data;
});

// This code is used to include the HTML code from sidebar-left-component.html into the current HTML file
fetch("../components/sidebar-left-component.html")
.then((response) => response.text())
.then((data) => {
  document.getElementById("sidebar-left").innerHTML = data;
});

// Chat box
const chatBox = document.getElementById("chat-box");
const minimizeChatButton = document.getElementById(
"minimize-chat-button"
);

// Minimize or expand the chat box
minimizeChatButton.addEventListener("click", () => {
chatBox.classList.toggle("chat-box-minimized");
});

// Dummy data for sample users
const users = [
{
  name: "Jane Doe",
  email: "jane.doe@example.com",
  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80",
},
{
  name: "Bob Johnson",
  email: "bob.johnson@example.com",
  image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80",
},
{
  name: "Mary Lee",
  email: "mary.lee@example.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=60",
},
{
  name: "John Smith",
  email: "john.smith@example.com",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=50&q=60",
},
];

const loggedInUser = {
  name: "Benito Camela",
  email: "benito.camela@example.com",
  image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",      
};

function displayLoggedInUser(){
  // Display loggedInUser Image
  const profilePictureNewsFeed = document.getElementById("profile-picture-container-newsfeed");
  const image = `<img src="${loggedInUser.image}" id="profile-picture-newsfeed">`;
  profilePictureNewsFeed.innerHTML = image;
  // profilePictureNewsFeed.appendChild(image);
}

// Display users in the chat
const chatContent = document.getElementById("chat-content");
users.forEach((user) => {
const message = document.createElement("div");
message.classList.add("chat-message");
message.innerHTML = `
  <img src="${user.image}" class="chat-message-user-image">
  <div class="chat-message-user">${user.name}</div>
`;
chatContent.appendChild(message);
});

// Search for users
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
const searchText = searchInput.value.trim().toLowerCase();
const searchResults = users.filter(
  (user) =>
    user.name.toLowerCase().includes(searchText) ||
    user.email.toLowerCase().includes(searchText)
);

// Display search results in the chat content
chatContent.innerHTML = "";
searchResults.forEach((user) => {
  const message = document.createElement("div");
  message.classList.add("chat-message");
  message.innerHTML = `
  <img src="${user.image}" class="chat-message-user-image" width="50">
  <div class="chat-message-user">${user.name}</div>
  <div class="chat-message-email">${user.email}</div>
`;
  chatContent.appendChild(message);
});
});

// Open the chat box by default
chatBox.classList.remove("chat-box-minimized");

// Define some sample news feed items
const newsFeedItems = [
{ 
  title: "First news feed item", 
  author: "John Doe", 
  date: "March 1, 2023", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
},
{ 
  title: "Second news feed item", 
  author: "Jane Smith", 
  date: "February 28, 2023", 
  content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
},
{ 
  title: "Third news feed item", 
  author: "Bob Johnson", 
  date: "February 27, 2023", 
  content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
}
];

// Function to display the news feed items
function displayNewsFeedItems() {
const newsFeed = document.getElementById("news-feed");
newsFeed.innerHTML = "";
newsFeedItems.forEach(item => {
  const newsFeedItem = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.author}</h6>
        <p class="card-text">${item.content}</p>
        <p class="card-text"><small class="text-muted">${item.date}</small></p>
      </div>
    </div>
  `;
  newsFeed.insertAdjacentHTML("beforeend", newsFeedItem);
});
}

// Display the news feed items when the page loads  
window.addEventListener("load", displayNewsFeedItems);
window.addEventListener("load", displayLoggedInUser);