const readline = require('readline-sync');
const { addProduct } = require('./addProduct');
const removeProduct = require('./removeProduct');
const showProducts = require('./showProducts');

function main() {
    while (true) {
        console.log('\nControl de Inventario');
        console.log('1. Agregar Producto');
        console.log('2. Eliminar Producto');
        console.log('3. Mostrar Productos');
        console.log('4. Salir');
        const choice = readline.question('Elige una opcion: ');

        switch (choice) {
            case '1':
                const name = readline.question('Nombre del producto: ');
                const quantity = parseInt(readline.question('Cantidad: '), 10);
                addProduct(name, quantity);
                break;
            case '2':
                const id = readline.question('ID del producto a eliminar: ');
                removeProduct(id);
                break;
            case '3':
                showProducts();
                break;
            case '4':
                console.log('Saliendo...');
                return;
            default:
                console.log('Opción no válida');
        }
    }
}

main();
