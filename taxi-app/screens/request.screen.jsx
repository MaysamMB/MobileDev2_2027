import RequestForm from "../components/requestForm/requestForm";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as SQLite from "expo-sqlite";
import {useRoute} from '@react-navigation/native';

const RequestScreen = () => {
    const db = SQLite.openDatabaseSync("taxi-app");
    const nav = useNavigation();
    const route = useRoute();
    const data =  route.params?.data;
    useEffect(() => {
        db.execSync(`
            CREATE TABLE IF NOT EXISTS requests (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                loc TEXT NOT NULL,
                dest TEXT NOT NULL,
                pass TEXT,
                luggage INTEGER,
                gender TEXT,
                date INTEGER
            );
        `);
    }, []);

    const HandleSubmit = (data) => {
        const result = db.runSync(
            `INSERT INTO requests
            (name, loc, dest, pass, luggage, gender, date)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            data.name,
            data.location,
            data.destination,
            data.passengers,
            data.lugge,
            data.gender,
            1793750400
        );

        console.log(result);
    };

    return (
        <RequestForm onsubmit={HandleSubmit} />
    );
};

export default RequestScreen;