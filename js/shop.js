// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  for (const product of products) {
    if (product.id === id) {
        let encontradoEnCarrito = false;
        for (const item of cart) {
            if (item.id === id) {
                item.quantity++;
                encontradoEnCarrito = true;
                calculateTotalItems();
                break;
            }
        }
        if (!encontradoEnCarrito) {
            const producto_copy = {...product, quantity : 1}
            cart.push(producto_copy)
            calculateTotalItems();
        } break; 
    }

  }
  return cart;
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}


// Exercise 2
function cleanCart() {
    cart = [];
    printCart();
}

// Exercise 3
function calculateTotal() {

    cartList = cart 
    total = cartList.reduce ((acc, item) => {
        return acc + (item.subtotalWithDiscount ? item.subtotalWithDiscount : item.price) * item.quantity;
    }, 0);

     return total;
    // Calculate total price of the cart using the "cartList" array
}

function calculateTotalItems() {
    let totalItems = 0;
    for (const item of cart) {
        totalItems += item.quantity;
    }
    const count_product = document.getElementById("count_product");
    count_product.innerHTML = totalItems;

}
// Exercise 4
function applyPromotionsCart() {

    cart.map((item) => {
        if (item.offer && item.quantity >= item.offer.number) {
            item.subtotalWithDiscount = item.price - (item.price * item.offer.percent / 100);
        }
    });

    return cart;
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {

    let cart = applyPromotionsCart()
    const cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';
    for (const item of cart) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.subtotalWithDiscount || item.price}</td>
            <td>${item.quantity} <button onclick="removeFromCart(${item.id})" style="margin-left: 5px; padding: 2px 6px; font-size: 0.8rem;">–</button>
        </td>
            <td>${item.subtotalWithDiscount ? item.subtotalWithDiscount * item.quantity : item.price * item.quantity}</td>
        `;
        cartList.appendChild(tr);
    }

    const totalPrice = document.getElementById('total_price');
    totalPrice.innerHTML = calculateTotal();

     
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for (const product of products) {
        if (product.id === id) {
            for (const item of cart) {
                if (item.id === id) {
                    item.quantity--;

                    if (item.quantity === 0) {
                        cart.splice(cart.indexOf(item), 1);
                    } else if (item.subtotalWithDiscount && item.quantity < item.offer.number) {
                        item.subtotalWithDiscount = undefined;
                    }
                    
                    printCart();
                    calculateTotalItems();
                    break;
                }
            }
        
        }
}
}



function open_modal() {
    printCart();
}

