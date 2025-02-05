import React from 'react';
import { Text, View } from 'react-native';

const ChildComponent = (props) => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </View>
  );
};

export default ChildComponent;