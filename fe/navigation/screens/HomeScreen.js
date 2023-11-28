import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

// Google Sign In Button
const GymPartButton = (props) => {
    const source = props.source;
    const name = props.name;

    return (
        <View style={styles.gymContainer}>
            <Text style={styles.gymText}>{name}</Text>
            <TouchableOpacity style={styles.gymButton}>
            </TouchableOpacity>
        </View>
    )
}


const HomeScreen = () => {



    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <GymPartButton name="CHEST"/>
                <GymPartButton name="BACK"/>
                <GymPartButton name="BICEPS"/>
                <GymPartButton name="LEGS"/>

            </View>
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
        marginTop: 100, // Expand the Margin for the Text
        fontSize: 20,
        color: '#BEBDC3',
    },


    // Google Button
    gymContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    gymButton: {
        marginTop: 10, // Expand the Margin for the Text
        alignItems: 'center',
        flexDirection: "row", 
        backgroundColor: '#1B1926', // Background Color of Button
        padding: 60,
        // Depth Effect
        borderRadius: 1000, // Curves Button
        borderWidth: 1, // Width of Button
        borderBottomWidth: 5, // Depth Effect
        borderColor: "#171520", // Border Color
    },
    gymText: {
        color: '#BEBDC3',
        fontSize: 20,
    },

    gymImage: {
        color: '#BEBDC3',
    }


})

export default HomeScreen