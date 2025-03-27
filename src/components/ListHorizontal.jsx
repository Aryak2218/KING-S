import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import products from "../data";

const ListHorizontal = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {products.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    card: {
        width: 150,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        padding: 10,
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10,
    },
    title: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold", s
    },
});

export default ListHorizontal;
