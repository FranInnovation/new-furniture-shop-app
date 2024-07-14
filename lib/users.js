import sql from 'better-sqlite3';

const db = sql('furnitureshop.db');

export async function getUser(user) {
    console.log('loginUser: ', user)
    return db.prepare('SELECT * FROM user WHERE email = ?').get(user.email);
}