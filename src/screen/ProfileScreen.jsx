import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'barang'));
      const items = [];
      querySnapshot.forEach((docItem) => {
        items.push({ id: docItem.id, ...docItem.data() });
      });
      setData(items);
    } catch (error) {
      Alert.alert('Gagal memuat data');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'barang', id));
      fetchData();
    } catch (error) {
      Alert.alert('Gagal menghapus produk');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Animatable.Image
          source={{ uri: 'https://i.pinimg.com/236x/9c/83/e0/9c83e0e917f900da1f7697b42db8f149.jpg' }}
          style={styles.profileImage}
          animation="fadeIn"
          duration={1000}
        />
        <Text style={styles.name}>Toko Sparepart Motor</Text>
        <Text style={styles.username}>@tokosparepart</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Lokasi</Text>
          <Text style={styles.infoText}>Jakarta, Indonesia</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Kontak</Text>
          <Text style={styles.infoText}>+62 812-3456-7890</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoText}>admin@tokosparepart.com</Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Pengaturan</Text>
        </TouchableOpacity>
      </View>

      <Animatable.View
        style={styles.actionSection}
        animation="zoomIn"
        duration={1500}
      >
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#007AFF' }]}
          onPress={() => navigation.navigate('Form')}
        >
          <Text style={[styles.actionButtonText, { color: 'white' }]}>Tambah Produk</Text>
        </TouchableOpacity>
      </Animatable.View>

      <View style={{ padding: 20 }}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text>{item.category}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => navigation.navigate('Form', item)}
                >
                  <Text style={{ color: 'white' }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  profileImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  username: { fontSize: 16, color: '#666' },
  infoSection: { padding: 20 },
  infoItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  infoLabel: { fontSize: 16, color: '#666', marginBottom: 5 },
  infoText: { fontSize: 18, fontWeight: 'bold' },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  actionButtonText: { fontSize: 16, fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: { width: 100, height: 100 },
  cardContent: { flex: 1, padding: 10 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardDesc: { fontSize: 14, color: '#666', marginTop: 4 },
  cardActions: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 5,
    minWidth: 70,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 5,
    minWidth: 70,
    alignItems: 'center',
  },
});

export default ProfileScreen;
