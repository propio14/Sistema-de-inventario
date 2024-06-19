const { inventory } = require('./addProduct');

function showProducts() {
    if (inventory.length > 0) {
        console.log('Inventario:');
        inventory.forEach(product => {
            console.log(`ID: ${product.id}, Nombre: ${product.name}, Cantidad: ${product.quantity}`);
        });
    } else {
        console.log('El inventario está vacío 00');
    }
}

module.exports = showProducts;

