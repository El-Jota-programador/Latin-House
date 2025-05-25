// Check if there is already an item in the order
let itemInOrder = false;

buttonFunctions();
toggleBar();
toggleDishMenu();
order();

function buttonFunctions() {

    const home = document.getElementById("home-button");
    const secHome = document.getElementById("sec-home");

    const menu = document.getElementById("menu-button");
    const secMenu = document.getElementById("sec-menu");

    const order = document.getElementById("order-button");
    const secOrder = document.getElementById("sec-order");

    const info = document.getElementById("contact-button");
    const secInfo = document.getElementById("sec-info");


    let actualSection = secHome; // Variable to keep track of the current section
    let actualButton = home; // Variable to keep track of the current button

    const buttons = [
        home,
        menu,
        order,
        info,
    ];

    const sections = [
        secHome,
        secMenu,
        secOrder,
        secInfo,
    ];

    buttons.forEach((button, idx) => {
        button.addEventListener('click', function () {
            // Hide all sections
            sections.forEach((section) => {
                if (section) section.style.display = "none";
            });

            // Reset styles of all buttons
            buttons.forEach((btn) => {
                btn.style.borderBottom = "transparent";
                btn.style.filter = "brightness(0.8)";
            });

            // Shows the correspondiente section and aplies styles to the active button
            if (sections[idx]) sections[idx].style.display = "block";
            button.style.borderBottom = "2px solid #4c3c2a";
            button.style.filter = "brightness(1.2)";

            // Update the state variables
            actualSection = sections[idx];
            actualButton = button;

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

    const tacos = document.getElementById('Tacos');
    const pozole = document.getElementById('Pozole');
    const pupusas = document.getElementById('Pupusas');
    const tamalesDeElote = document.getElementById('Tamales de elote');
    const tostadasSalvadoreñas = document.getElementById('Tostadas salvadoreñas');
    const carimañola = document.getElementById('Carimañola')
    const alfajores = document.getElementById('Alfajores');
    const crescent = document.getElementById('Crescent');

    dishButtons.forEach((dish) => {
        dish.addEventListener('click', function () {

            // Elimina cualquier menú anterior
            document.querySelectorAll('.dish-menu').forEach(menu => menu.remove());     

            let dishMenu = document.createElement('div');
            dishMenu.className = 'dish-menu';

            let dishName = document.createElement('p');
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

            const menuWithSelect = () => {
                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);
            }

            const menuNoSelect = () => {
                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);
            }

            if (dish == tacos) {
                selectText.innerHTML = "Choose the tacos' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Beef and onion", "Vegetables"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                    selected = opt;
                });

                menuWithSelect();
            } else if (dish == pozole) {
                selectText.innerHTML = "Choose the type of meat";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Pork", "Chicken"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();

            } else if (dish == pupusas) {
                selectText.innerHTML = "Choose the pupusas' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Chicharron (pork)", "Beans", "Chicharron and beans", "'Locas' (chicharron, beans and cheese)", "Asaparagus"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();
            } else if (dish == tamalesDeElote) {
                selectText.innerHTML = "Choose the tamales' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Chicken and potato", "Beans"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();

            } else if (dish == tostadasSalvadoreñas) {
                selectText.innerHTML = "Choose the toasts' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Chicken and potato", "Beans"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();

            } else if (dish == carimañola) {
                selectText.innerHTML = "Choose the carimañolas' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Beef", "Cheese", "Chicken"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();

            } else if (dish == alfajores) {
                selectText.innerHTML = "Choose the alfajores' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Dulce de leche", "Chocolate", "Jam"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();

            } else if (dish == crescent) {
                selectText.innerHTML = "Choose the alfajores' filling";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Dulce de leche", "Chocolate", "Jam"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                menuWithSelect();
            } else {
                dishName.innerHTML = clickedDish;

                menuNoSelect();
            };

            // Posiciona el menú al lado del plato clickeado
            document.body.appendChild(dishMenu);
            const rect = dish.getBoundingClientRect();
            dishMenu.style.position = 'absolute';
            dishMenu.style.top = `${window.scrollY + rect.top}px`;
            dishMenu.style.left = `${window.scrollX + rect.right - 488}px`;

            addToCartButton.addEventListener('click', () => {
                clickedDish = dish.id;
                // Lee el precio oculto, reemplaza coma por punto y convierte a float
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
                    addToCart (clickedDish, itemPriceNumber, itemPrice, selected, quantity, instructions, dishMenu, dish);
                    itemInOrder = true; // Set the flag to true when an item is added to the order
                }
            });
        });
    });
};

function addToCart (clickedDish, itemPriceNumber, itemPrice, selected, quantity, instructions, dishMenu, dish) {
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

    calculateTotalPrice();
};

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
    const secHome = document.getElementById("sec-home");
    const secOrder = document.getElementById("sec-order");
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
        secOrder.style.display = 'none';
    });

    backHomeButton.addEventListener('click', () => {
        secOrderSuccess.style.display = 'none';
        secHome.style.display = 'flex';
        upperBar.style.display = 'flex'; // Show the upper bar again
        deliveryName.value = '';
        deliveryAddress.value = '';
        deliveryPhone.value = '';
        document.getElementById('order-container').innerHTML = ''; // Clear the order items
        document.getElementById('total-price').innerHTML = '0.00€'; // Reset total price
        itemInOrder = false; // Reset the flag
    });
}
