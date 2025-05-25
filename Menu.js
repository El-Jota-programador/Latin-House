buttonFunctions();
toggleBar();
toggleDishMenu();

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

            let clickedDish;
            let itemPrice = "";
            let selected;
            let instructions = "";
            let quantity;

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);
            } else if (dish == pozole) {
                selectText.innerHTML = "Choose the type of meat";
                selectText.className = "input-text";
                dishName.innerHTML = clickedDish;

                // Options for the select
                const options = ["Pork, Chicken"];
                options.forEach(opt => {
                    let option = document.createElement('option');
                    option.value = opt.toLowerCase();
                    option.textContent = opt;
                    selector.appendChild(option);
                });

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

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

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(selectText);
                dishMenu.appendChild(selector);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);

            } else {
                dishName.innerHTML = clickedDish;

                xButtonDiv.appendChild(xButton);
                dishMenu.appendChild(xButtonDiv);
                dishMenu.appendChild(amountText);
                dishMenu.appendChild(amount);
                dishMenu.appendChild(instructionsText);
                dishMenu.appendChild(specialInstructions);
                dishMenu.appendChild(addToCartButton);
            };

            // Posiciona el menú al lado del plato clickeado
            document.body.appendChild(dishMenu);
            const rect = dish.getBoundingClientRect();
            dishMenu.style.position = 'absolute';
            dishMenu.style.top = `${window.scrollY + rect.top}px`;
            dishMenu.style.left = `${window.scrollX + rect.right - 488}px`;

            addToCartButton.addEventListener('click', () => {
                clickedDish = dish.id;
                itemPrice = dish.querySelector('.price').textContent;
                selected = selector.value;
                quantity = parseInt(amount.value);
                instructions = specialInstructions.value;

                addToCart (clickedDish, itemPrice, selected, quantity, instructions, dishMenu);
            });
        });
    });
};

function addToCart (clickedDish, itemPrice, selected, quantity, instructions, dishMenu) {
    const divOrderContainer = document.getElementById('order-container');
    let divOrderItem = document.createElement('div');
    divOrderItem.className = 'order-item';
    let orderNamePrice = document.createElement('div');
    orderNamePrice.className = 'order-name-price';
    let name = document.createElement('p');
    name.className = 'kanchenjunga-bold';
    name.innerHTML = clickedDish;
    let price = document.createElement('p');
    price.className = 'kanchenjunga-bold';
    price.innerHTML = itemPrice;
    let orderDescription = document.createElement('div');
    orderDescription.className = 'order-description';
    let description = document.createElement('p');

    if (instructions) description.innerHTML = instructions;
    else if (!instructions) {
        let itemDescription = dish.querySelector('item-description');
        description.innerHTML = itemDescription;
    }

    orderNamePrice.appendChild(name);
    orderNamePrice.appendChild(price);

    divOrderItem.appendChild(orderNamePrice);
    divOrderItem.appendChild(orderDescription);

    divOrderContainer.appendChild(divOrderItem);

    dishMenu.remove();

};

function order () {
    const orderButton = document.getElementById('ordering-button');
    orderButton.addEventListener('click', () => {
        const secOrder = document.getElementById("sec-order");
        const secDeliveryInfo = document.getElementById("sec-delivery-info");
        secOrder.style.display = 'none';
        secDeliveryInfo.style.display = 'flex';
    }
    const cancelButton = document.getElementById('cancel-button');
}

//una ventana para elegir si es a domicilio o reserva

//después del nombre del plato en la comanda, si instrucciones: las instrucciones; si no instrucciones: descripción del plato.
