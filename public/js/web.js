

function validateForm() {
    var x = document.forms["nama"]["fnama"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Hello " + x);
    }
} 

/*class Product {
    constructor(nama, keterangan, harga, jumlah) {
        this.nama = {nama_produk};
        this.keterangan = {keterangan};
        this.harga = {harga};
        this.jumlah = {jumlah};
    }
}

class UI {
    static displayProduct() {
        const StoredProduct = [];
        
        const products =  StoredProduct;

        products.forEach((product) => UI.addProductToList(product));
    }

    static addProductToList(product) {
        const list = document.querySelector('#product-list');

        const row = document.createElement('tr');

        row.innerHTML = `
         <td>${product.nama}</td>
         <td>${product.keterangan}</td>
         <td>${product.jumlah}</td>
         <td>${product.harga}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', UI.displayProduct);

document.querySelector('#product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nama = document.querySelector('#nama_produk').value;
    const keterangan = document.querySelector('#keterangan').value;
    const harga = document.querySelector('#harga').value;
    const jumlah = document.querySelector('#jumlah').value;

    const product = new Product(nama, keterangan, harga, jumlah);

    UI.addProductToList(product);
});*/