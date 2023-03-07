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