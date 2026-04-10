// OrderAcceptedScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Đảm bảo bạn có file ảnh success_icon trong assets hoặc thay bằng Icon */}
        <Image 
          source={require('../assets/order_accepted.png')} 
          style={styles.icon} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Your Order has been accepted</Text>
        <Text style={styles.subTitle}>
          Your items has been placed and is on it's way to being processed
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>

        {/* --- CẬP NHẬT NÚT QUAY VỀ SHOP --- */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Main', { screen: 'Shop' })}
        >
          <Text style={styles.homeText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 25 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { width: 220, height: 220, marginBottom: 40 },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#181725',
    paddingHorizontal: 20 
  },
  subTitle: { 
    color: '#7C7C7C', 
    textAlign: 'center', 
    fontSize: 16, 
    lineHeight: 22,
    paddingHorizontal: 10
  },
  footer: { paddingBottom: 30 },
  trackBtn: { 
    backgroundColor: '#53B175', 
    height: 65, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 25 
  },
  trackText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  homeText: { 
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#181725' 
  }
});