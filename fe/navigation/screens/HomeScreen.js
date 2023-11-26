// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
    <Text>
        Hello
    </Text>
  );
}

export default HomeScreen;