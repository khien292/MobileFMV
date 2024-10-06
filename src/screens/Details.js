import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function Dashboard() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState(""); // State to hold the comment

  const pickImage = async () => {
    // Request permission to access the camera roll
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(permissionResult); // Log the permission result for debugging
  
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
  
    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.name}>Owen Cabarrubias</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>Delivery Number:</Text>
            <Text style={styles.detailText}>9</Text>

            <Text style={styles.detailTitle}>Date:</Text>
            <Text style={styles.detailText}>2024-09-03</Text>

            <Text style={styles.detailTitle}>Address:</Text>
            <Text style={styles.detailText}>Wayayow street</Text>

            <Text style={styles.detailTitle}>Delivered to:</Text>
            <Text style={styles.detailText}>Owen</Text>

            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Shakoy                                                   x8</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Bobot                                                    x8</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Butchi                                                   x8</Text>
            </View>

            <View style={styles.imageContainer}>
              {image && <Image source={{ uri: image }} style={styles.image} />}
              <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
                <Text style={styles.buttonText}>Add Picture</Text>
              </TouchableOpacity>
            </View>

            {/* Comment Section */}
            <View style={styles.commentContainer}>
              <TextInput
                style={styles.commentInput}
                placeholder="Add a comment..."
                value={comment}
                onChangeText={setComment}
              />
            </View>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => navigation.navigate('Dashboard')}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.LogbuttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    width: '88%',
    position: 'absolute',
    top: 50,
    left: 22,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 17,
    elevation: 6,
    zIndex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollViewContent: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailsContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  nameContainer: {
    padding: 15,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  nameText: {
    fontSize: 16,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageButton: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    paddingVertical: 120,
    paddingHorizontal: 100,
    elevation: 4,
    alignSelf: 'center',
  },
  commentContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
  },
  commentInput: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  openButton: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 6,
    alignSelf: 'flex-end',
  },
  logoutButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 100,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  LogbuttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
