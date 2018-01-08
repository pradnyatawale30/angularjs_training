
// javascript.info for reference
// section5.5

class Product {
    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number) { }
}

interface IProductRepository {

    addProduct(product: Product): void;
    updateProduct(updatedProduct: Product): void;
    deleteProduct(pid: number): void;
    getProductById(pid: number): Product;
    getProducts(product: Product): Array<Product>;
}

class ProductRepository implements IProductRepository {
    private products: Array<Product> = new Array<Product>();

    addProduct(product: Product): void {
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    updateProduct(updatedProduct: Product): void {
        let index: number = this.products.findIndex((product) => {
            return product.id == updatedProduct.id;
        })
        this.products.splice(index, 1, updatedProduct);
    }
    deleteProduct(pid: number): void {
        let index: number = this.products.findIndex((product) => {
            return product.id == pid;
        })
        this.products.splice(index, 1);
    }
    getProductById(pid: number): Product {
        return this.products.find((product) => {
            return product.id == pid;
        });
    }
    getProducts(): Array<Product> {
        return this.products;
    }
}

let repo: ProductRepository = new ProductRepository();
repo.addProduct(new Product(0, "LG", "Mobile", "Smart Phone", 21222));
repo.addProduct(new Product(0, "Vivo", "Mobile", "Smart Phone", 12880));
repo.addProduct(new Product(0, "Samsung", "Mobile", "Smart Phone", 21000));

console.log(JSON.stringify(repo.getProducts()));

repo.updateProduct(new Product(5, "Vivo", "Mobile", "Smart Phone", 18222));

console.log(repo.getProductById(5));

repo.deleteProduct(1);

console.log(JSON.stringify(repo.getProducts()));