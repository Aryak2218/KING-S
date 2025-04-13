import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ItemSmall = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text style={styles.title}>Detail</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    category: {
        fontSize: 12,
        color: "gray",
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    description: {
        fontSize: 12,
        color: "#666",
    },
});

export default ItemSmall;
