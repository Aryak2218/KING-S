import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { ListHorizontal, ItemSmall } from "./components";
import products from "./data";


const App = () => {
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Toko Sparepart Motor</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Cari produk..."
                value={search}
                onChangeText={setSearch}
            />
            <ListHorizontal />
            <ScrollView>
                {filteredProducts.map((item) => (
                    <ItemSmall key={item.id} item={item} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    searchBar: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default App;
