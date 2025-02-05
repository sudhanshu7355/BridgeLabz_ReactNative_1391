import React from 'react';
import { Text, View } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <View>
      <ChildComponent name="John" age={25} />
    </View>
  );
};

export default ParentComponent;