import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from './../screens/About'
import Header from '../components/Header';

const Stack = createStackNavigator();

export function AboutStack({navigation}) {
    return (
        <Stack.Navigator 
            headerMode="float"
            screenOptions={{
                headerTintColor:"white",
                headerStyle:{
                    backgroundColor:"crimson",
                }
        }}>
            <Stack.Screen 
                name="About"
                component={About}
                options={{
                    headerTitle:()=><Header navigation={navigation} title="About"></Header>,
                }}
            />
        </Stack.Navigator>
    );
}