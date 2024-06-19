const { inventory } = require('./addProduct');

function removeProduct(id) {
    const index = inventory.findIndex(product => product.id === parseInt(id, 10));
    if (index !== -1) {
        const removedProduct = inventory.splice(index, 1);
        console.log(`Producto eliminado: ${removedProduct[0].name}`);
    } else {
        console.log('Producto no encontrado');
    }
}

module.exports = removeProduct;

