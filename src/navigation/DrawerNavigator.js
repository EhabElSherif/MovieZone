import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './HomeStack';
import { AboutStack } from './AboutStack';
import Icon from 'react-native-vector-icons/Ionicons'

const RootDrawer = createDrawerNavigator();

export function DrawerNavigator(){
    return (
        <RootDrawer.Navigator
            edgeWidth={50}
            drawerType="front"
            drawerContentOptions={{
                activeTintColor:"crimson",
                inactiveTintColor:"#666",
                labelStyle:{
                    fontWeight:"bold",
                    fontSize:18,
                },
            }}
        >
            <RootDrawer.Screen 
                name="Home"
                component={HomeStack}
                options={{
                    drawerIcon:({focused})=><Icon name="home" size={24} color={focused?"crimson":"#666"}></Icon>
                }}
            >
            </RootDrawer.Screen>

            <RootDrawer.Screen
                name="About"
                component={AboutStack}
                options={{
                    drawerIcon:({focused})=><Icon name="alert-circle" size={24} color={focused?"crimson":"#666"}></Icon>
                }}
            >
            </RootDrawer.Screen>
        </RootDrawer.Navigator>
    )
}