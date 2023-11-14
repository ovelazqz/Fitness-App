import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';


export default LoginScreen = () => {
    return (
        <View>
            <Text>LOGIN</Text>
            <Text>New To FitnessApp</Text>
            <Button
                title="Sign in to Google"
            />
        </View>
    )
}