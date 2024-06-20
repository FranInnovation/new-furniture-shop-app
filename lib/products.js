import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export function getProducts() {
    return db.prepare('SELECT * FROM product').all();
}

export function getProduct(productId) {
    return db.prepare('SELECT * FROM product WHERE id = ?').get(productId);
}

export async function saveProduct(product) {

    db.prepare(`
    INSERT INTO product (description, price)
    VALUES (@description, @price)
   `).run(product)
}
