import { useNavigation } from '@react-navigation/native';
import RequestForm from '../components/requestForm/requestForm.jsx';
import { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';

const RequestScreen = () => {
  const [db, setDB] = useState(null);
  // const nav = useNavigation();

  useEffect(() => {
    const tdb = SQLite.openDatabaseSync('taxi-app');
    setDB(tdb);

    tdb.execSync(`
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
  }, []);

  const handleSubmit = (data) => {
    // nav.navigate('driving', { data })

    // true when id is null OR undefined
    const isNew = data.id == null;

    // same conversions for insert and update
    const luggage = data.lugge == 'Has luggage' ? 1 : 0;
    const date = Math.floor(data.date / 1000.0);

    let result;
    if (isNew) {
      result = db.runSync(
        'INSERT INTO requests (name, loc, dest, pass, luggage, gender, date) VALUES (?,?,?,?,?,?,?)',
        data.name, data.location, data.destination, data.passengers, luggage, data.gender, date
      );
    } else {
      // named parameters: the object keys must start with $ too
      result = db.runSync(
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
    }

    const action = isNew ? 'submitted' : 'updated';
    if (result.changes > 0) {
      Alert.alert('Success', `Your request has been ${action} successfully`, [
        { text: 'OK' },
      ]);
    } else {
      Alert.alert('Error', `Failed to ${action} your request`, [
        { text: 'OK' },
      ]);
    }
  }

  return <RequestForm onSubmit={handleSubmit} db={db} />;
}

export default RequestScreen;