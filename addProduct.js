let inventory = [];
let nextId = 1;  // Inicializa el contador de ID

function addProduct(name, quantity) {
    const product = {
        id: nextId++,  // Asigna el siguiente ID y luego incrementa
        name,
        quantity,
    };
    inventory.push(product);
    console.log(`Producto agregado: ${name}, Cantidad: ${quantity}`);
}

module.exports = {
    addProduct,
    inventory,
};

