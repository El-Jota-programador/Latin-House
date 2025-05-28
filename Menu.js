// Check if there is already an item in the order
let itemInOrder = false;

const home = document.getElementById("home-button");
const secHome = document.getElementById("sec-home");

const menu = document.getElementById("menu-button");
const secMenu = document.getElementById("sec-menu");

const orderButton = document.getElementById("order-button");
const secOrder = document.getElementById("sec-order");

const info = document.getElementById("contact-button");
const secInfo = document.getElementById("sec-info");

buttonFunctions();
toggleBar();
toggleDishMenu();
order();

function buttonFunctions() {

    const buttons = [home, menu, orderButton, info];

    const sections = [secHome, secMenu, secOrder, secInfo];

    buttons.forEach((button, idx) => {
        button.addEventListener('click', function () {
            // Hide all sections
            sections.forEach((section) => {
                if (section) section.style.display = "none";
            });

            // Reset styles of all buttons
            buttons.forEach((btn) => {
                prevButtonStyle(btn);
            });

            // Shows the correspondiente section and aplies styles to the active button
            if (sections[idx]) sections[idx].style.display = "block";
            actualButtonStyle(button);

            window.scrollTo(0, 0);
        });
    });
}

// Function to toggle the upper bar size based on scroll position

function toggleBar() {
    document.addEventListener("scroll", function () {
        const upperBar = document.getElementById("upper-bar");
        if (window.scrollY === 0) {
            upperBar.style.height = "130px"; // Larger size when at the top
        } else {
            upperBar.style.height = "70px"; // Smaller size when scrolling
        }
    });
}

function toggleDishMenu () {
    const dishButtons = Array.from(document.getElementsByClassName('dish'));

    dishButtons.forEach((dish) => {
        dish.addEventListener('click', function () {

            // Elimina cualquier menú anterior
            document.querySelectorAll('.dish-menu').forEach(menu => menu.remove());     

            let dishMenu = document.createElement('div');
            dishMenu.className = 'dish-menu';

            let dishName = document.createElement('p');
                dishName.className = 'input-text';
                dishName.textContent = dish.id;
            let xButtonDiv = document.createElement('div');
                xButtonDiv.className = "x-button-div";
            let xButton = document.createElement('button');
                xButton.innerHTML = "x";
                xButton.className = "x-button";
                xButton.addEventListener('click', function () {
                    document.querySelectorAll('.dish-menu').forEach(menu => menu.remove());
                });

            let amountText = document.createElement('p');
                amountText.className = 'input-text';
                amountText.innerHTML = "¿How many do you want?";
            let amount = document.createElement('input');
            let addToCartButton = document.createElement('button');
                addToCartButton.className = 'add-to-cart';
                addToCartButton.innerHTML = "Add to cart";

            let selectText = document.createElement('p');
                selectText.className = "input-text";
            let selector = document.createElement('select');
            let instructionsText = document.createElement('p');
                instructionsText.className = "input-text";
                instructionsText.innerHTML = "Are there any allergies or intolerances that we should know?";
            let specialInstructions = document.createElement('input');
                specialInstructions.placeholder = "e.g. cheese, gluten, etc.";

            let clickedDish;
            let itemPrice = "";
            let itemPriceNumber;
            let selected;
            let instructions = "";
            let quantity;

            const dishOptions = {
                "Tacos": ["Beef and onion", "Vegetables"],
                "Pozole": ["Pork", "Chicken"],
                "Pupusas": ["Chicharron (pork)", "Beans", "Chicharron and beans", "'Locas' (chicharron, beans and cheese)", "Asaparagus"],
                "Tamales de elote": ["Chicken and potato", "Beans"],
                "Tostadas salvadoreñas": ["Chicken and potato", "Beans"],
                "Carimañola": ["Beef", "Cheese", "Chicken"],
                "Alfajores": ["Dulce de leche", "Chocolate", "Jam"],
                "Crescent": ["Dulce de leche", "Chocolate", "Jam"]
            }
            
            const options = dishOptions[dish.id];
            // Si hay opciones, crea el selector y añade las opciones
            if (options) {
                dishName.innerHTML = dish.id;
                selectText.innerHTML = "Choose the filling of the" + dish.id.toLowerCase() + ".";
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });
                buildMenu(dishMenu, xButtonDiv, [xButtonDiv, selectText, selector, amountText, amount, instructionsText, specialInstructions, addToCartButton], [dishName, xButton]);
            } else {
                buildMenu(dishMenu, xButtonDiv, [xButtonDiv, amountText, amount, instructionsText, specialInstructions, addToCartButton], [dishName, xButton]);
            }

            // Posiciona el menú al lado del plato clickeado
            document.body.appendChild(dishMenu);
            const rect = dish.getBoundingClientRect();
            dishMenu.style.position = 'absolute';
            dishMenu.style.top = `${window.scrollY + rect.top}px`;
            dishMenu.style.left = `${window.scrollX + rect.right - 488}px`;

            addToCartButton.addEventListener('click', () => {
                clickedDish = dish.id;
                let rawPrice = dish.querySelector('.price').textContent.replace(',', '.');
                itemPriceNumber = parseFloat(rawPrice); 
                itemPrice = rawPrice + '€';
                selected = selector.value;
                quantity = parseInt(amount.value);
                instructions = specialInstructions.value;

                if (quantity < 1 || isNaN(quantity)) {
                    alert("Please enter a valid quantity.");
                    return;
                } else {
                    addToCart (clickedDish, itemPriceNumber, selected, quantity, instructions, dishMenu, dish);
                    itemInOrder = true; // Set the flag to true when an item is added to the order
                }
            });
        });
    });
};

function addToCart (clickedDish, itemPriceNumber, selected, quantity, instructions, dishMenu, dish) {
    const divOrderContainer = document.getElementById('order-container');
    let divOrderItem = document.createElement('div');
    divOrderItem.className = 'order-item';
    let orderNamePrice = document.createElement('div');
    orderNamePrice.className = 'order-name-price';
    let dishDisplayName = clickedDish;
    if (selected) {
        dishDisplayName += ' <span class="kanchenjunga-regular-brown">with ' + selected + '</span>';
    }
    if (quantity) {
        dishDisplayName += ' <span class="kanchenjunga-regular-brown">x' + quantity + '</span>';
    }
    let name = document.createElement('p');
    name.className = 'kanchenjunga-bold';
    name.innerHTML = dishDisplayName;
    let price = document.createElement('p');
    price.className = 'kanchenjunga-bold price';
    // Multiplica y muestra dos decimales
    price.innerHTML = (itemPriceNumber * quantity).toFixed(2) + '€';

    let orderDescription = document.createElement('div');
    orderDescription.className = 'order-description';
    let description = document.createElement('p');

    if (instructions) description.innerHTML = '<em>' + 'Without ' + instructions + '.' + '</em>';
    else if (!instructions) {
        let itemDescription = dish.querySelector('.item-description');
        description.innerHTML = itemDescription.textContent;
    }

    orderNamePrice.appendChild(name);
    orderNamePrice.appendChild(price);

    orderDescription.appendChild(description);

    divOrderItem.appendChild(orderNamePrice);
    divOrderItem.appendChild(orderDescription);

    divOrderContainer.appendChild(divOrderItem);

    dishMenu.remove();

    showMessage(clickedDish, quantity);
    calculateTotalPrice();
};

async function showMessage(clickedDish, quantity) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    const message = document.createElement('p');
    message.className = 'message';
    message.innerHTML = `Added ${quantity} ${clickedDish} to your order.`;

    messageContainer.appendChild(message);
    document.body.appendChild(messageContainer);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    messageContainer.remove(); // Remove the message after 2 seconds
}

function calculateTotalPrice() {
    const orderItems = document.querySelectorAll('.order-item');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    totalPriceElement.innerHTML = '0.00€'; // Reset total price before calculation
    orderItems.forEach(item => {
        let priceText = item.querySelector('.order-name-price p.price').textContent;
        let priceValue = parseFloat(priceText.replace('€', '').replace(',', '.'));
        if (!isNaN(priceValue)) {
            totalPrice += priceValue;
        }
    });
    totalPriceElement.innerHTML = totalPrice.toFixed(2) + '€'; // Update total price with two decimal places
}

function order () {
    const orderButtons = document.getElementsByClassName('order-buttons');
    const secOrder = document.getElementById("sec-order");
    const secDeliveryInfo = document.getElementById("sec-delivery-info");
    const divOrderContainer = document.getElementById('order-container');
    const totalPriceElement = document.getElementById('total-price');
    
    orderButtons[0].addEventListener('click', () => {
        if (!itemInOrder) {
            alert("Please add at least one item to the order before proceeding.");
            return;
        } else if (itemInOrder) {
            secOrder.style.display = 'none';
            secDeliveryInfo.style.display = 'flex';
            confirmation();
        }
    });
    orderButtons[1].addEventListener('click', () => {
        secOrder.style.display = 'flex';
        secDeliveryInfo.style.display = 'none';
        divOrderContainer.innerHTML = '';
        totalPriceElement.innerHTML = '0.00€'; // Reset total price when going back to order
    });
}

function confirmation () {
    const secDeliveryInfo = document.getElementById("sec-delivery-info");
    const secOrderSuccess = document.getElementById("sec-order-success");
    const confButton = document.getElementById('confirm-button');
    const backButton = document.getElementById('back-button');
    const deliveryName = document.getElementById('name');
    const deliveryAddress = document.getElementById('address');
    const deliveryPhone = document.getElementById('phone');
    const upperBar = document.getElementById("upper-bar");
    const backHomeButton = document.getElementById('back-to-home-button');

    confButton.addEventListener('click', () => {
        if (!deliveryName.value || !deliveryAddress.value || !deliveryPhone.value) {
            alert("Please fill in all the delivery information before proceeding.");
            return;
        } else if (deliveryName.value && deliveryAddress.value && deliveryPhone.value) {
            secDeliveryInfo.style.display = 'none';
            secOrderSuccess.style.display = 'flex';
            upperBar.style.display = 'none'; // Hide the upper bar on confirmation
        }
    });

    backButton.addEventListener('click', () => {
        secDeliveryInfo.style.display = 'flex';
        secOrderSuccess.style.display = 'none';
    });

    backHomeButton.addEventListener('click', () => {
        secOrderSuccess.style.display = 'none';
        prevButtonStyle(orderButton);
        secHome.style.display = 'block';
        actualButtonStyle(home);
        upperBar.style.display = 'flex'; // Show the upper bar again
        deliveryName.value = '';
        deliveryAddress.value = '';
        deliveryPhone.value = '';
        document.getElementById('order-container').innerHTML = ''; // Clear the order items
        document.getElementById('total-price').innerHTML = '0.00€'; // Reset total price
        itemInOrder = false; // Reset the flag
    });
}

function buildMenu(dishMenu, xButtonDiv, elements, xElements) {
    elements.forEach(child => dishMenu.appendChild(child));
    xElements.forEach(child => xButtonDiv.appendChild(child));
}

const actualButtonStyle = (button) => {
    button.style.borderBottom = "2px solid #4c3c2a";
    button.style.filter = "brightness(1.2)";
}

const prevButtonStyle = (button) => {
    button.style.borderBottom = "transparent";
    button.style.filter = "brightness(0.8)";
}