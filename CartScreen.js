import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function AccountScreen() {
  const MenuItem = ({ icon, title }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        {icon}
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
      <AntDesign name="right" size={18} color="#181725" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image source={require('../assets/asus.png')} style={styles.avatar} />
          <View style={styles.profileText}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>asus</Text>
              <Feather name="edit-2" size={16} color="#53B175" style={{marginLeft: 10}} />
            </View>
            <Text style={styles.email}>asus@gmail.com</Text>
          </View>
        </View>

        {/* Menu List */}
        <View style={styles.menuList}>
          <MenuItem icon={<Feather name="shopping-bag" size={22} />} title="Orders" />
          <MenuItem icon={<Feather name="user" size={22} />} title="My Details" />
          <MenuItem icon={<Ionicons name="location-outline" size={22} />} title="Delivery Address" />
          <MenuItem icon={<MaterialCommunityIcons name="credit-card-outline" size={22} />} title="Payment Methods" />
          <MenuItem icon={<Ionicons name="pricetag-outline" size={22} />} title="Promo Cord" />
          <MenuItem icon={<Ionicons name="notifications-outline" size={22} />} title="Notifcations" />
          <MenuItem icon={<Feather name="help-circle" size={22} />} title="Help" />
          <MenuItem icon={<Feather name="info" size={22} />} title="About" />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <MaterialCommunityIcons name="logout" size={24} color="#53B175" />
          <Text style={styles.logoutText}>Log Out</Text>
          <View style={{width: 24}} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  profileHeader: { flexDirection: 'row', padding: 25, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  avatar: { width: 65, height: 65, borderRadius: 27 },
  profileText: { marginLeft: 20 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  email: { color: '#7C7C7C', fontSize: 16 },
  menuList: { marginTop: 10 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 25, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuTitle: { marginLeft: 15, fontSize: 18, fontWeight: '600', color: '#181725' },
  logoutBtn: { backgroundColor: '#F2F3F2', margin: 25, height: 65, borderRadius: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 },
  logoutText: { color: '#53B175', fontSize: 18, fontWeight: 'bold' }
});