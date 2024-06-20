import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export function getClients() {
    return db.prepare('SELECT * FROM client').all();
}

export function getClient(clientId) {
    return db.prepare('SELECT * FROM client WHERE id = ?').get(clientId);
}

export async function saveClient(client) {

    console.log('clientfrom clients.js', client)

    db.prepare(`
        INSERT INTO client (name, lastname, document, birthdate, email)
        VALUES (@name, @lastname, @document, @birthdate, @email)
    `).run(client)
}