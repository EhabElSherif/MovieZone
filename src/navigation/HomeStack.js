import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../components/Header';

const Stack = createStackNavigator();

export function HomeStack({navigation}) {
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
                name="Home"
                component={Home}
                options={{
                    headerTitle:()=><Header navigation={navigation} title="MovieZone"></Header>, 
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title:'Review Details',
                }}
            />
        </Stack.Navigator>
    );
}