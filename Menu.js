buttonFunctions();

function buttonFunctions() {

    const homeButtonContainer = document.getElementById("home-button-container");
    const home = document.getElementById("home-button");
    const secHome = document.getElementById("sec-home");

    const menuButtonContainer = document.getElementById("menu-button-container");
    const menu = document.getElementById("menu-button");
    const secMenu = document.getElementById("sec-menu");

    const orderButtonContainer = document.getElementById("order-button-container");
    const order = document.getElementById("order-button");
    const secOrder = document.getElementById("sec-order");

    const infoButtonContainer = document.getElementById("info-button-container");
    const info = document.getElementById("contact-button");
    const secInfo = document.getElementById("sec-info");


    let actualSection = secHome; // Variable to keep track of the current section
    let actualButton = home; // Variable to keep track of the current button

    const buttons = [
        homeButtonContainer,
        menuButtonContainer,
        orderButtonContainer,
        infoButtonContainer,
    ];

    const sections = [
        secHome,
        secMenu,
        secOrder,
        secInfo,
    ];

    home.addEventListener("click", function () {
        actualSection.style.display = "none";
        actualButton.style.borderBottom = "transparent";
        actualButton.style.filter = "brightness(0.8)";

        window.scrollTo(0, 0);
        secHome.style.display = "block";
        home.style.borderBottom = "2px solid #4c3c2a";
        home.style.filter = "brightness(1.2)";
        actualSection = secHome;
        actualButton = home;
    });

    menu.addEventListener("click", function () {
        actualSection.style.display = "none";
        actualButton.style.borderBottom = "transparent";
        actualButton.style.filter = "brightness(0.8)";

        window.scrollTo(0, 0);
        secMenu.style.display = "block";
        menu.style.borderBottom = "2px solid #4c3c2a";
        actualButton = menu; // Update the actual button
        actualSection = secMenu; // Update the actual section
    });
    
    order.addEventListener("click", function () {
        actualSection.style.display = "none";
        actualButton.style.borderBottom = "transparent";
        actualButton.style.filter = "brightness(0.8)";

        window.scrollTo(0, 0);
        secOrder.style.display = "block";
        order.style.borderBottom = "2px solid #4c3c2a";
        actualSection = secOrder; // Update the actual section
        actualButton = order; // Update the actual button
    });

    info.addEventListener("click", function () {
        actualSection.style.display = "none";
        actualButton.style.borderBottom = "transparent";
        actualButton.style.filter = "brightness(0.8)";

        window.scrollTo(0, 0);
        secInfo.style.display = "block";
        info.style.borderBottom = "2px solid #4c3c2a";
        actualSection = secInfo; // Update the actual section
        actualButton = info // Update the actual section
    });

    buttonBrightness(actualButton); // Call the function to change button brightness
}

// Function to change the brightness of buttons on hover

function buttonBrightness(actualButton) {
    const home = document.getElementById("home-button");
    const menu = document.getElementById("menu-button");
    const order = document.getElementById("order-button");
    const info = document.getElementById("contact-button");
    const buttons = [home, menu, order, info];

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Reset styles for all buttons
                actualButton.style.filter = "brightness(0.8)";
                actualButton.style.borderBottom = "transparent";

            // Apply styles to the clicked button
            if (actualButton !== button) {
                button.style.filter = "brightness(1.2)";
                button.style.borderBottom = "2px solid #4c3c2a";
                actualButton = button; // Update the actual button
            }
        });

        button.addEventListener("mouseover", function () {
            if (actualButton !== button) {
                button.style.filter = "brightness(1.2)";
                button.style.borderBottom = "2px solid #4c3c2a";
            } 
        });

        button.addEventListener("mouseout", function () {
            if (actualButton !== button) {
                button.style.filter = "brightness(0.8)";
                button.style.borderBottom = "transparent";
            } 
        });
    });

    toggleMenu();
}

// Function to toggle the menu size based on scroll position

function toggleMenu() {
    document.addEventListener("scroll", function () {
        const upperBar = document.getElementById("upper-bar");
        if (window.scrollY === 0) {
            upperBar.style.height = "130px"; // Larger size when at the top
        } else {
            upperBar.style.height = "70px"; // Smaller size when scrolling
        }
    });
}