import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import products from './src/data';
import { Profile } from 'iconsax-react-native';
import Home from './src/screen/Home';
import ProductDetailScreen from './src/screen/ProductDetailScreen';

const App = () => {
    return (
        <ProductDetailScreen />
    );
};
export default App;