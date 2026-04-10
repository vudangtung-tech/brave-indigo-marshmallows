import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Thêm Image
import { AntDesign } from '@expo/vector-icons';

export default function CheckoutModal({ visible, onClose, onPlaceOrder }) {
  
  // Component con để hiển thị từng dòng trong Checkout
  const CheckoutRow = ({ label, value, isPayment }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rowRight}>
        
        {/* --- PHẦN THAY ĐỔI Ở ĐÂY --- */}
        {isPayment ? (
          <Image 
            source={require('../assets/credit_card.png')} // Thay 'card_icon.png' bằng tên ảnh của bạn
            style={styles.paymentImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
        {/* --------------------------- */}

        <AntDesign name="right" size={16} color="#181725" style={{marginLeft: 10}} />
      </View>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="#181725" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <CheckoutRow label="Delivery" value="Select Method" />
          <CheckoutRow label="Payment" isPayment={true} />
          <CheckoutRow label="Promo Code" value="Pick discount" />
          <CheckoutRow label="Total Cost" value="$13.97" />

          <Text style={styles.terms}>
            By placing an order you agree to our 
            <Text style={{fontWeight:'bold', color: '#181725'}}> Terms And Conditions</Text>
          </Text>
          
          <TouchableOpacity style={styles.orderBtn} onPress={onPlaceOrder}>
            <Text style={styles.orderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  content: { 
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 25,
    paddingBottom: 40 
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginBottom: 10 },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  label: { fontSize: 18, color: '#7C7C7C', fontWeight: '600' },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  value: { fontSize: 16, fontWeight: '600', color: '#181725' },
  
  // Style cho ảnh Payment mới của bạn
  paymentImage: { 
    width: 24, 
    height: 16, // Chỉnh lại kích thước theo tỉ lệ ảnh của bạn (thường là hình chữ nhật cho thẻ)
  },

  terms: { color: '#7C7C7C', marginVertical: 25, lineHeight: 22, fontSize: 14 },
  orderBtn: { 
    backgroundColor: '#53B175', 
    height: 65, 
    borderRadius: 19, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  orderText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});