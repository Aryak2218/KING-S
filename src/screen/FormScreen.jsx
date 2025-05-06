import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const FormScreen = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    Alert.alert('Produk Ditambahkan', `Nama: ${title}\nHarga: ${price}`);
    
    setTitle('');
    setPrice('');
    setImage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Produk</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Harga</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tambah Produk</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  label: { fontSize: 16, marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  button: { backgroundColor: '#000', padding: 15, borderRadius: 10, marginTop: 30 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
