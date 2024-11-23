let totalPrice = 0;

async function fetchUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const products = await response.json();
        display(products);
    } catch (error) {
        const cardsContainer = document.getElementById('cards');
        cardsContainer.innerHTML = `<p style="color: red; font-size: 44px;">Error 404</p>`;
    }
}

function display(products) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
            <p class="price">$${product.price}</p>
            <button onclick="addToTodo('${product.title}', ${product.price})">Sotib olish</button>
        `;
        cardsContainer.appendChild(card);
    });
}


function addToTodo(title, price) {
    // alert("Sotib olasizmi !!");
    const todoItems = document.getElementById('todoItems');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong> - <span style="color: rgb(0, 255, 42);">$${price}</span>`;
    todoItems.appendChild(listItem);

    totalPrice += price;
    updateTotal();
}
function updateTotal() {
    const totalElement = document.getElementById('totalPrice');
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

fetchUsers();
