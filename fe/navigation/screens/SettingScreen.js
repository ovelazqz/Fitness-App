// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const GoogleProfileImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/icon.png')}
      />
    </View>
  )
}


const GoogleSignOutButton = () => {
  navigation = useNavigation()
  const signOut = () => {
    navigation.replace('Login')
  }
  return (
      <View>
          <TouchableOpacity style={styles.googleSignOutButton} onPress={signOut}>
              <Text style={styles.googleSignOutText}>LOG OUT</Text>
          </TouchableOpacity>
      </View>
  )
}


const SettingScreen = () => {
    return (
    <View style={styles.container}>
      <GoogleProfileImage/>
      <GoogleSignOutButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Overall Container
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1E1E1E',
      width: '100%',
      height: '100%',
      // Ensures Padding (For All Screen Size)
      paddingHorizontal: 36,
      paddingVertical: 36
  },


  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 175,
    width: 175,
    backgroundColor: '#1B1926',
    // Ensures Padding (For All Screen Size)
    paddingHorizontal: 36,
    paddingVertical: 36

  },

  image: {
    height: 150,
    width: 150,
  },

  // Sign Out Button
  googleSignOutButton: {
      marginTop: 40, // Expand the Margin for the Text
      alignItems: 'center',
      flexDirection: "row", 
      backgroundColor: '#FFB8B8', // Background Color of Button
      // Changes the Size
      paddingHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 15, // Curves Button
  },

  googleSignOutText: {
      color: '#FF5252',
      fontSize: 20,
  },



})



export default SettingScreen;