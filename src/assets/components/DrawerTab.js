import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DrawerHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Owen Cabarrubias</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Ionicons name="close" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  nameContainer: {
    width: 220,
    backgroundColor: 'white',
    padding: 15, 
    marginRight: 8,   
    marginLeft: -10,       
    borderRadius: 5,          

    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.3,        
    shadowRadius: 4,           
    elevation: 4,            
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DrawerHeader;
