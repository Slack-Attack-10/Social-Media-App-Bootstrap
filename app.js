const loggedInUser = {
    name: "Benito Camela",
    email: "benito.camela@example.com",
    image:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
};

// Define some sample products
const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 4", price: 40 },
];

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

// Dummy data for sample users
const users = [
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80",
    },
    {
      name: "Mary Lee",
      email: "mary.lee@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=60",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=50&q=60",
    },
  ];


function loadPage(){
    try 
    {
        // This code is used to include the HTML code from navigation-component.html into the current HTML file
        let navigationContainer;
        fetch("./components/navigation-component.html")
            .then((response) => response.text())
            .then((data) => {
                navigationContainer = document.getElementById("navigation");
                navigationContainer.innerHTML = data;
                console.log(navigationContainer.innerHTML);
            });
    
        // This code is used to include the HTML code from sidebar-left-component.html into the current HTML file
        fetch("./components/sidebar-left-component.html")
            .then((response) => response.text())
            .then((data) => {
                document.getElementById("sidebar-left").innerHTML = data;
            })
            .catch((error) => console.error(error));

    
        document.addEventListener("click", (event) => {
            const link = event.target.closest("a");
    
            if (link && link.href && link.href.includes(".html")) 
            {
                event.preventDefault();
    
                fetch(link.href)
                    .then((response) => response.text())
                    .then((data) => {
                    const container = document.getElementById("main-content-container");
                    container.innerHTML = data;
    
                    const productList = document.getElementById("product-list");
                    if (productList != null) {
                        productList.innerHTML = "";
                        products.forEach((product) => {
                        const productCard = `
                                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">$${product.price}</p>
                                    <button class="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                                </div>
                            `;
                        productList.insertAdjacentHTML("beforeend", productCard);
                        });
                    }
    
                    const newsFeed = document.getElementById("news-feed");
                    if (newsFeed != null) {
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
    
                    const newsFeedComponent =
                        document.getElementById("newsfeed-container");
                    if (newsFeedComponent != null) {
                        // newsFeedComponent.innerHTML = data;
                        // Display loggedInUser Image
                        const profilePictureNewsFeed = document.getElementById(
                        "profile-picture-container-newsfeed"
                        );
                        const image = `<img src="${loggedInUser.image}" id="profile-picture-newsfeed">`;
                        profilePictureNewsFeed.innerHTML = image;
                    }


                    const profilePictureProfilePage = document.getElementById("profile-picture-profile-page");
                    if (profilePictureProfilePage != null){
                        profilePictureProfilePage.classList.add("col-12", "profile-picture");
                        console.log(loggedInUser);
                        profilePictureProfilePage.innerHTML = `<img src="${loggedInUser.image}" alt="Profile Picture">`;
                    }
                });
            }
        });
    
      // Chat box
      const chatBox = document.getElementById("chat-box");
      if (chatBox != null) {
        const minimizeChatButton = document.getElementById("minimize-chat-button");
        // Minimize or expand the chat box
        minimizeChatButton.addEventListener("click", () => {
          chatBox.classList.toggle("chat-box-minimized");
        });
      }
    
      // Display users in the chat
      const chatContent = document.getElementById("chat-content");
      if (chatContent) {
        users.forEach((user) => {
          const message = document.createElement("div");
          message.classList.add("chat-message");
          message.innerHTML = `
                <img src="${user.image}" class="chat-message-user-image">
                <div class="chat-message-user">${user.name}</div>
                `;
          chatContent.appendChild(message);
        });
      }
    
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

    } catch (error) {
      console.log(error.message);
    }
}


window.addEventListener("DOMContentLoaded", loadPage);
