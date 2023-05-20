
const loggedInUser = {
    name: "Benito Camela",
    email: "benito.camela@example.com",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",      
};

function displayLoggedInUserImage() {
    const profilePictureProfilePage = document.getElementById("profile-picture-profile-page");
    profilePictureProfilePage.classList.add("col-12", "profile-picture");
    console.log(loggedInUser);
    profilePictureProfilePage.innerHTML =  `<img src="${loggedInUser.image}" alt="Profile Picture">`
}

function loadPage(){

    displayLoggedInUserImage();
    //   profilePictureProfilePage.appendChild(image);

    // This code is used to include the HTML code from sidebar-left-component.html into the current HTML file
    fetch("../components/sidebar-left-component.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("sidebar-left").innerHTML = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // This code is used to include the HTML code from navigation-component.html into the current HTML file
    fetch("../components/navigation-component.html")
        .then((response) => response.text())
        .then((data) => {
            const navigationContainer = document.getElementById("navigation");
            navigationContainer.innerHTML = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadPage)
window.addEventListener("load", loadPage);