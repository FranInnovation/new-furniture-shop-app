import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export function getEstimates() {
    return db.prepare('SELECT * FROM estimate').all();
}

export function getEstimate(estimateId) {
    return db.prepare('SELECT * FROM product WHERE id = ?').get(estimateId);
}

export async function saveEstimate(estimate) {

    const stmt = db.prepare(`
    INSERT INTO estimate (creationDate)
    VALUES (@creationDate)
   `);
   const info = stmt.run(estimate)

   return info.lastInsertRowid;
}

export async function saveClientEstimate(clientEstimate) {
    db.prepare(`
        INSERT INTO client_estimate (id_client, id_estimate)
        VALUES (@id_client, @id_estimate)
    `).run(clientEstimate);
}

export async function saveProductEstimate(productEstimate) {
    db.prepare(`
        INSERT INTO product_estimate (id_product, id_estimate, quantity)
        VALUES (@id_product, @id_estimate, @quantity)
    `).run(productEstimate)
}