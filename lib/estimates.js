import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export function getEstimates() {
    return db.prepare('SELECT * FROM estimate').all();
}

export function getEstimate(estimateId) {
    return db.prepare('SELECT * FROM product WHERE id = ?').get(estimateId);
}

export async function saveEstimate(estimate) {

//     db.prepare(`
//     INSERT INTO product (description, price)
//     VALUES (@description, @price)
//    `).run(product)
console.log('ESTIMATE: ', estimate)
}