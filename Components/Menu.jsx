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
                setPage("orders");
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

function Menu({ state, setState, setPage }) {
    const [customer, setCustomer] = useState("");

    useEffect(() => {
        if (state.customer) {
            setCustomer(state.customer);
        }
    });

    return (
        <View>
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
                    s.customer = e;
                    setState(s);
                }}
                value={customer}
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
});

export default Menu;
