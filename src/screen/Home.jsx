import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { ListHorizontal, ItemSmall } from "../components";
import products from "../data";
import { Profile } from "iconsax-react-native";
import * as Animatable from 'react-native-animatable';

const Home = () => {
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Animatable.Text
                    style={styles.header}
                    animation="fadeInUp"
                    duration={1000}
                >
                    Toko Sparepart Motor
                </Animatable.Text>
                <Animatable.View
                    animation="bounceIn"
                    duration={1500}
                >
                    <Profile size={30} color='black' />
                </Animatable.View>
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Cari produk..."
                value={search}
                onChangeText={setSearch}
            />
            <ListHorizontal />
            <ScrollView>
                {filteredProducts.map((item) => (
                    <Animatable.View
                        key={item.id}
                        animation="fadeInUp"
                        duration={1000}
                        delay={500}
                    >
                        <ItemSmall item={item} />
                    </Animatable.View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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

export default Home;
