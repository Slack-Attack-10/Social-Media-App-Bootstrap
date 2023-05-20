const loggedInUser = {
  name: "Benito Camela",
  email: "benito.camela@example.com",
  image:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
};

// Display loggedInUser Image
function displayLoggedInUserImage() {
  const profilePictureNewsFeed = document.getElementById(
    "profile-picture-container-newsfeed"
  );
  const image = `<img src="${loggedInUser.image}" id="profile-picture-newsfeed">`;
  profilePictureNewsFeed.innerHTML = image;
  // profilePictureNewsFeed.appendChild(image);
  // const profilePictureProfilePage = document.getElementById("profile-picture-profile-page");
  // profilePictureProfilePage.classList.add("col-12", "profile-picture");
  // console.log(loggedInUser);
  // profilePictureProfilePage.innerHTML =  `<img src="${loggedInUser.image}" alt="Profile Picture">`
}

// Define some sample news feed items
const newsFeedItems = [
  {
    title: "First news feed item",
    author: "John Doe",
    date: "March 1, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Second news feed item",
    author: "Jane Smith",
    date: "February 28, 2023",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Third news feed item",
    author: "Bob Johnson",
    date: "February 27, 2023",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

// Function to display the news feed items
function displayNewsFeedItems() {
  const newsFeed = document.getElementById("news-feed");
  newsFeed.innerHTML = "";
  newsFeedItems.forEach((item) => {
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

window.addEventListener("load", displayLoggedInUserImage);
window.addEventListener("load", displayNewsFeedItems);