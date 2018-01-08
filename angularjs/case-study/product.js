// javascript.info for reference
// section5.5
class Product {
    constructor(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}
class ProductRepository {
    constructor() {
        this.products = new Array();
    }
    addProduct(product) {
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    updateProduct(updatedProduct) {
        let index = this.products.findIndex((product) => {
            return product.id == updatedProduct.id;
        });
        this.products.splice(index, 1, updatedProduct);
    }
    deleteProduct(pid) {
        let index = this.products.findIndex((product) => {
            return product.id == pid;
        });
        this.products.splice(index, 1);
    }
    getProductById(pid) {
        return this.products.find((product) => {
            return product.id == pid;
        });
    }
    getProducts() {
        return this.products;
    }
}
let repo = new ProductRepository();
repo.addProduct(new Product(0, "LG", "Mobile", "Smart Phone", 21222));
repo.addProduct(new Product(0, "Vivo", "Mobile", "Smart Phone", 12880));
repo.addProduct(new Product(0, "Samsung", "Mobile", "Smart Phone", 21000));
console.log(JSON.stringify(repo.getProducts()));
repo.updateProduct(new Product(5, "Vivo", "Mobile", "Smart Phone", 18222));
console.log(repo.getProductById(5));
repo.deleteProduct(1);
console.log(JSON.stringify(repo.getProducts()));
