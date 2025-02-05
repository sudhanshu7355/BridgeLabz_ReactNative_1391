import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  useEffect(() => {
    console.log('Component mounted or updated');

    return () => {
      console.log('Component will unmount');
    };
  }, []); 

  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default MyComponent;