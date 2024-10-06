import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style = {styles.container}>
    <View style = {styles.textContainer}>
      <Text style = {styles.text}>
        FMV MOBILE APP DELIVERY
      </Text>
    </View>
      <View style = {styles.ImageContainer}>
        <Image source= {require('../assets/455260731_522148417039118_1148233885170384483_n.png')} style = {styles.Image} resizeMode="contain" />
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name={"user"} size={24} style={styles.inputIcon}/>
        <TextInput style = {styles.textInput} placeholder='Username'/>
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name={"lock"} size={24} style={styles.inputIcon}/>
        <TextInput style = {styles.textInput} placeholder='Password'  secureTextEntry={!isPasswordVisible}/>
        <TouchableOpacity
          style={styles.togglePasswordButton}
          onPress={togglePasswordVisibility}
        >
          <MaterialIcons
            name={isPasswordVisible ? 'visibility-off' : 'visibility'} 
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Login

const styles = StyleSheet.create({
      container:{
        backgroundColor: '#F5F5F5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      ImageContainer: {
        marginTop: 180,
        marginBottom: 30,
        alignItems: 'center', 
        width: '100%', 
        position: 'relative',

      },
      Image: {
        width: "80%",
        height: 250,

      },
      textContainer:{
        position: 'absolute',
        top: 80,
        alignItems: 'center',
        width: '100%',


      },
      text: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#000',
        textAlign: 'center',

      },
      inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
        backgroundColor: 'white', 
        borderRadius: 20, 
        padding: 12, 
        elevation: 4,

      },
      inputIcon:{
        marginLeft: 9,
      },
      textInput: {
        flex: 1,
        marginLeft: 10,
      },

      togglePasswordButton: {
        marginLeft: 10,
      },
      button: {
        marginTop: 20,
        width: '40%', 
        backgroundColor: '#007BFF', 
        borderRadius: 20, 
        paddingVertical: 15, 
        alignItems: 'center', 
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },


})