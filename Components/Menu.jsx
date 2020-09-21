import React, { useEffect, useState } from "react";
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";

const Item = ({ item, state, setState, setPage }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                let s = state;
                item.customer = s.customer;
                s.orders.push(item);
                setState(s);
                setPage("Orders");
            }}
        >
            <View style={styles.item}>
                <Text
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: 24,
                        color: "white",
                    }}
                >
                    {item.name}
                </Text>
                <View style={styles.durationView}>
                    <Text
                        style={{
                            color: "white",
                            marginRight: 10,
                            fontWeight: "bold",
                        }}
                    >
                        Duration:
                    </Text>
                    <Text style={{ color: "white" }}>
                        {item.duration} seconds
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

function Menu({ state, setState, page, setPage }) {
    const [customer, setCustomer] = useState("");

    useEffect(() => {
        if (state.customer) {
            setCustomer(state.customer);
        }
    });

    return (
        <View style={(styles.container, styles.topBar)}>
            <Text style={styles.title}>Menu</Text>
            <TextInput
                placeholder="Customer Name"
                style={{
                    width: "100%",
                    height: 50,
                    fontSize: 18,
                    marginTop: 30,
                    textAlign: "center",
                    backgroundColor: "#eee",
                }}
                onChangeText={(e) => {
                    let s = state;
                    setCustomer(e);
                    setState(s);
                }}
                value={state.customer || customer}
            />

            <SafeAreaView>
                <FlatList
                    style={styles.list}
                    data={state.menu}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                            state={state}
                            setState={setState}
                            setPage={setPage}
                        />
                    )}
                    keyExtractor={(_, index) => String(index)}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        padding: 10,
    },
    list: {
        paddingTop: 25,
    },
    item: {
        margin: 10,
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 5,
    },
    durationView: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        fontSize: 32,
        width: 120,
        height: 50,
    },
    topBar: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 10,
        paddingTop: 30,
    },
});

export default Menu;
