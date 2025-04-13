import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import products from '../data';

const ProductDetailScreen = ({ route }) => {



  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: products[0].image }} 
        style={styles.productImage} 
        resizeMode="cover"
      />
      
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{products[0].title}</Text>
        <Text style={styles.productCategory}>{products[0].category}</Text>
        
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
          <Text style={styles.productDescription}>{products[0].description}</Text>
        </View>
        
        <View style={styles.detailSection}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Ketersediaan</Text>
            <Text style={styles.detailText}>Tersedia</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Kondisi</Text>
            <Text style={styles.detailText}>Baru</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productInfo: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  descriptionSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  detailSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailItem: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;