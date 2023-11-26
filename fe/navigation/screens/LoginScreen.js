import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

// Google Sign In Button
const GoogleSignInButton = () => {
    
    const navigation = useNavigation()
    
    const signIn = () => {
        navigation.replace('Home')
    }
    return (
        <View>
            <TouchableOpacity style={styles.googleButton} onPress={signIn}>
                <Icon name="google" style={styles.googleIcon} size={30}></Icon>
                <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}


const LoginScreen = () => {



    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>L O G I N</Text>
            <Text style={styles.fitnessAppText}>New To FitnessApp?</Text>
            <GoogleSignInButton/>
        </View>
    )
}

// Style Sheet
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


    loginText: {
        fontSize: 48,
        color: '#BEBDC3'
    },


    // New to FitnessApp?
    fitnessAppText: {
        marginTop: 200, // Expand the Margin for the Text
        fontSize: 20,
        color: '#BEBDC3',
    },


    // Google Button
    googleButton: {
        marginTop: 10, // Expand the Margin for the Text
        alignItems: 'center',
        flexDirection: "row", 
        backgroundColor: '#1B1926', // Background Color of Button
        padding: 15,
        // Depth Effect
        borderRadius: 50, // Curves Button
        borderWidth: 1, // Width of Button
        borderBottomWidth: 5, // Depth Effect
        borderColor: "#171520", // Border Color
    },
    googleText: {
        color: '#BEBDC3',
        fontSize: 20,
        paddingLeft: 10
    },

    googleIcon: {
        color: '#BEBDC3',
    }


})

export default LoginScreen