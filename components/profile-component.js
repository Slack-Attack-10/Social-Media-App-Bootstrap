const loggedInUser = {
    name: "Benito Camela",
    email: "benito.camela@example.com",
    image:
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
};

function displayLoggedInUserImage() {
    const profilePictureProfilePage = document.getElementById("profile-picture-profile-page");
    if (profilePictureProfilePage != null){
        profilePictureProfilePage.classList.add("col-12", "profile-picture");
        console.log(loggedInUser);
        profilePictureProfilePage.innerHTML = `<img src="${loggedInUser.image}" alt="Profile Picture">`;
    }

    // const image = `<img src="${loggedInUser.image}" id="profile-picture-profile-page" alt="Profile Picture">`;
    // profilePictureProfilePage.innerHTML = image;
  }

  window.addEventListener("load", displayLoggedInUserImage);