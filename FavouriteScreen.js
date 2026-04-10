// ErrorModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ErrorModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <AntDesign name="close" size={24} />
          </TouchableOpacity>
          
          <Image source={require('../assets/order_failed.png')} style={styles.img} />
          <Text style={styles.title}>Oops! Order Failed</Text>
          <Text style={styles.sub}>Something went terribly wrong.</Text>
          
          <TouchableOpacity style={styles.retryBtn}>
            <Text style={styles.retryText}>Please Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}><Text style={styles.backText}>Back to home</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 25 },
  content: { backgroundColor: '#FFF', borderRadius: 20, padding: 25, alignItems: 'center' },
  closeBtn: { alignSelf: 'flex-start' },
  img: { width: 220, height: 220, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 15 },
  sub: { color: '#7C7C7C', marginBottom: 30 },
  retryBtn: { backgroundColor: '#53B175', width: '100%', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  retryText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  backText: { fontSize: 18, fontWeight: 'bold' }
});