const sql = require('better-sqlite3')
const db = sql('furnitureshop.db');
// const bcrypt = require('bcrypt');

const dummyClients = [
   {
      name: 'Pedro',
      lastname: 'Pérez',
      document: '12345678A',
      birthdate: '1990-01-01',
      email: 'pperez@mail.com'
   },
   {
      name: 'Fran',
      lastname: 'Martínez',
      document: '12345678A',
      birthdate: '1991-01-01',
      email: 'fmartinez@mail.com'
   },
   {
      name: 'Pablo',
      lastname: 'Picapiedra',
      document: '12345678A',
      birthdate: '1995-01-01',
      email: 'ppicapiedra@mail.com'
   }
]

const dummyProducts = [
   {
      description: 'A pine wardrobe',
      price: 250
   },
   {
      description: 'A pine bed',
      price: 150
   },
   {
      description: 'A mohagany wardrobe',
      price: 550
   },
   {
      description: 'A mohagany bed',
      price: 450
   },
]

const dummyUsers = [
   {
      email: 'sjobs@mail.com',
      name: 'Steve',
      lastname: 'Jobs',
      // password: bcrypt.hashSync('password1', 10)
      password: 'password1'
   }
]

db.prepare(`
   CREATE TABLE IF NOT EXISTS client (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       lastname TEXT NOT NULL,
       document TEXT NOT NULL,
       birthdate DATE NOT NULL,
       email TEXT NOT NULL
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS product (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       description TEXT NOT NULL,
       price INTEGER NOT NULL
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS estimate (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       creationDate DATE NOT NULL,
       updateDate DATE
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS user (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       email TEXT NOT NULL,
       name TEXT NOT NULL,
       lastName TEXT NOT NULL,
       password TEXT NOT NULL
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS product_estimate (
       id_product INTEGER NOT NULL,
       id_estimate INTEGER NOT NULL,
       quantity INTEGER NOT NULL,
       PRIMARY KEY (id_product, id_estimate),
       FOREIGN KEY (id_product) REFERENCES product(id),
       FOREIGN KEY (id_estimate) REFERENCES estimate(id)
   )
`).run();

db.prepare(`
   CREATE TABLE IF NOT EXISTS client_estimate (
       id_client INTEGER NOT NULL,
       id_estimate INTEGER NOT NULL,
       PRIMARY KEY (id_client, id_estimate),
       FOREIGN KEY (id_client) REFERENCES client(id),
       FOREIGN KEY (id_estimate) REFERENCES estimate(id)
   )
`).run();


async function initData() {
  const clientInsert = db.prepare(`
      INSERT INTO client 
      ( name, lastname, document, birthdate, email )
       VALUES (
         @name,
         @lastname,
         @document,
         @birthdate,
         @email
      )
   `);

   const productInsert = db.prepare(`
      INSERT INTO product 
      ( description, price) VALUES (
         @description,
         @price
      )
   `);

   const userInsert = db.prepare(`
      INSERT INTO user 
      ( email, name, lastname, password) VALUES (
         @email,
         @name,
         @lastname,
         @password
      )
   `);

   for (const client of dummyClients) {
      clientInsert.run(client);
   }

   for (const product of dummyProducts) {
      productInsert.run(product);
   }

   for (const user of dummyUsers) {
      userInsert.run(user);
   }
}

initData();
