import * as SQLite from 'expo-sqlite';

// Single shared connection, opened once when this module is first imported.
const db = SQLite.openDatabaseSync('taxi-app');

db.execSync(`
  CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    loc TEXT NOT NULL,
    dest TEXT NOT NULL,
    pass INTEGER,
    luggage INTEGER,
    gender TEXT,
    date INTEGER
  );
`);

// ---- CRUD for the requests table ----
// Form data -> DB columns (same conversions for insert and update)
const toRow = (data) => ({
  luggage: data.lugge == 'Has luggage' ? 1 : 0,
  date: Math.floor(data.date / 1000.0),
});

// returns { changes, lastInsertRowId }
export const insertRequest = (data) => {
  const { luggage, date } = toRow(data);
  return db.runSync(
    'INSERT INTO requests (name, loc, dest, pass, luggage, gender, date) VALUES (?,?,?,?,?,?,?)',
    data.name, data.location, data.destination, data.passengers, luggage, data.gender, date
  );
};

export const updateRequest = (data) => {
  const { luggage, date } = toRow(data);
  return db.runSync(
    'UPDATE requests SET name=$name, loc=$location, dest=$destination, pass=$passengers, luggage=$luggage, gender=$gender, date=$date WHERE id=$id',
    {
      $name: data.name,
      $location: data.location,
      $destination: data.destination,
      $passengers: data.passengers,
      $luggage: luggage,
      $gender: data.gender,
      $date: date,
      $id: data.id,
    }
  );
};

export const getAllRequests = () => db.getAllSync('SELECT * FROM requests');

// returns the row, or null when not found
export const getRequestById = (id) =>
  db.getFirstSync('SELECT * FROM requests WHERE id=?', id);

export const deleteRequest = (id) =>
  db.runSync('DELETE FROM requests WHERE id = $id', { $id: id });

export default db;
