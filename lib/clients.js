import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export function getClients() {
    return db.prepare('SELECT * FROM client').all();
}

export function getClient(clientId) {
    return db.prepare('SELECT * FROM client WHERE id = ?').get(clientId);
}

export async function saveClient(client) {

    db.prepare(`
        INSERT INTO client (name, lastname, document, birthdate, email)
        VALUES (@name, @lastname, @document, @birthdate, @email)
    `).run(client)
}

export async function updateClient(client) {
    db.prepare(`
        UPDATE client
        SET name = @name,
            lastname = @lastname,
            document = @document,
            birthdate = @birthdate,
            email = @email
        WHERE id = @id
    `).run(client);
}