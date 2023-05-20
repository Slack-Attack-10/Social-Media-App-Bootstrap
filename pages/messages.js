    // This code is used to include the HTML code from navigation-component.html into the current HTML file
    fetch("../components/navigation-component.html")
        .then((response) => response.text())
        .then((data) => {
          const navigationContainer = document.getElementById("navigation");
          navigationContainer.innerHTML = data;
        });