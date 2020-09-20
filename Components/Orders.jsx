import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";

const Item = ({
    state,
    setState,
    setPage,
    item,
    index,
    reloadCount,
    setReloadCount,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                let s = state;
                s.orders.splice(index, 1);
                s.ready.push(item);
                setState(s);
                setReloadCount(reloadCount);
                setPage("ready");
            }}
        >
            <Text style={styles.customerName}>{item.customer}</Text>
            <View style={styles.item}>
                <Text
                    style={{
                        ...styles.itemText,
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        fontSize: 24,
                    }}
                >
                    {item.name}
                </Text>
                <Text style={{ ...styles.itemText }}>
                    {item.duration} seconds
                </Text>
            </View>
        </TouchableOpacity>
    );
};

function Orders({ state, setState, setPage }) {
    const [reloadCount, setReloadCount] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setPage("menu")}>
                <View style={{ width: 120, height: 40, marginTop: 30 }}>
                    <Text style={{ fontSize: 16 }}>Back</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>Orders</Text>
            {state.orders.length ? (
                <FlatList
                    style={styles.list}
                    data={state.orders}
                    renderItem={({ item, index }) => (
                        <Item
                            state={state}
                            setState={setState}
                            setPage={setPage}
                            item={item}
                            index={index}
                            reloadCount={reloadCount}
                            setReloadCount={setReloadCount}
                        />
                    )}
                    keyExtractor={(_, index) => String(index)}
                />
            ) : (
                <Text style={{ fontSize: 20, color: "#999" }}>
                    No Items in List
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        padding: 10,
    },
    title: {
        fontSize: 32,
        width: 120,
        height: 50,
    },
    item: {
        width: "100%",
        backgroundColor: "#333",
        padding: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        borderTopLeftRadius: 0,
        marginBottom: 10,
    },
    itemText: {
        color: "white",
        fontSize: 16,
    },
    customerName: {
        backgroundColor: "#777",
        width: 150,
        borderTopRightRadius: 5,
        color: "white",
        padding: 5,
        fontSize: 16,
    },
    list: {},
    topBar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 30,
    },
});

export default Orders;
