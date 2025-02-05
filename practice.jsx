

import React, {useEffect} from 'react';
import {Text,View} from 'react-native';
const MyComponent=()=>{
    useEffect( ()=>{
        console.log('component mounted or updated');
        return ()=>{
            console.log('component will unmount');
        };
    },[]);
    return(
        <View>
            <Text>Hello world</Text>
        </View>
    );
};
export default MyComponent;