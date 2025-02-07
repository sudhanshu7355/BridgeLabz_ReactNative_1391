import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {Platform.OS}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#f0f0f0' : '#e0e0e0',
  },
  text: {
    fontSize: 20,
    color: Platform.OS === 'ios' ? 'blue' : 'green',
  },
});

export default App;