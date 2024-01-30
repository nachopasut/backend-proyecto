class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;

    }


    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
        }
    
        if (this.products.some(product => product.code === code)) {
            console.log("El código ya existe");
        }

        this.id++;
        this.products.push({ title, description, price, thumbnail, code, stock, id: this.id });
    }

    getProducts = () => {
        return console.log(this.products);
    };

    arrayPorID(id) {
        return this.products.find((producto) => producto.id === id)}

    getProductbyId(id) {
        this.arrayPorID(id) ? console.log(this.arrayPorID(id)) : console.log("Not found") 

    };
}

const productManager = new ProductManager;


productManager.addProduct("mesa", "Donde apoyar los platos", 3000, "No disponible", "H1206", 20);
productManager.addProduct("silla", "Donde apoyar la cola", 1000, "No disponible", "H1208", 100);


productManager.getProducts();

productManager.getProductbyId(2);
productManager.getProductbyId(12);


productManager.addProduct("Casco", "Lo que usan los obreros", "No disponible", "H1206", 30);