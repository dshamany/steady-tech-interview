import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Menu from "./Components/Menu";
import Orders from "./Components/Orders";
import Ready from "./Components/Ready";

const MENU = [
    { id: "CAL1", name: "Cafe Au Lait", duration: 4 },
    { id: "CAL2", name: "Cappuccino", duration: 10 },
    { id: "CAL3", name: "Expresso", duration: 15 },
];

export default function App() {
    const [state, setState] = useState({
        menu: MENU,
        orders: [],
        ready: [],
        customer: "",
    });
    const [page, setPage] = useState("menu");
    switch (page) {
        case "menu":
            return <Menu state={state} setState={setState} setPage={setPage} />;
        case "orders":
            return (
                <Orders state={state} setState={setState} setPage={setPage} />
            );
        case "ready":
            return (
                <Ready state={state} setState={setState} setPage={setPage} />
            );
        default:
            return (
                <View style={styles.container}>
                    <Text>Page Not Found</Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
