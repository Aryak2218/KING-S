import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';

const FormScreen = ({ navigation, route }) => {
  const [category, setCategory] = useState(route?.params?.category || '');
  const [title, setTitle] = useState(route?.params?.title || '');
  const [description, setDescription] = useState(route?.params?.description || '');
  const [image, setImage] = useState(route?.params?.image || '');
  const isEdit = route?.params?.id;

  const handleSubmit = async () => {
    const data = { category, title, description, image };
    try {
      if (isEdit) {
        await axios.put(`https://682489d30f0188d7e729b56a.mockapi.io/api/barang/${route.params.id}`, data);
        Alert.alert('Produk Diperbarui');
      } else {
        await axios.post('https://682489d30f0188d7e729b56a.mockapi.io/api/barang', data);
        Alert.alert('Produk Ditambahkan');
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Terjadi kesalahan', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kategori</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} placeholder="Contoh: Mesin" />

      <Text style={styles.label}>Judul</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Contoh: Oli Motor Racing" />

      <Text style={styles.label}>Deskripsi</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Contoh: Oli sintetik untuk performa tinggi"
      />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholder="Contoh: https://example.com/image.jpg"
      />

      {image ? (
        <Image source={{ uri: image }} style={styles.imagePreview} resizeMode="contain" />
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{isEdit ? 'Simpan Perubahan' : 'Tambah Produk'}</Text>
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
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#f0f0f0',
  },
});
