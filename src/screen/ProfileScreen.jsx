import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import products from '../data';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/236x/9c/83/e0/9c83e0e917f900da1f7697b42db8f149.jpg' }} 
          style={styles.profileImage} 
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  infoItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
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
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;