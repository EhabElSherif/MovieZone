import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './HomeStack';
import { AboutStack } from './AboutStack';

const RootDrawer = createDrawerNavigator();

export function DrawerNavigator(){
    return (
        <RootDrawer.Navigator
            edgeWidth={50}
            drawerType="front"
        >
            <RootDrawer.Screen 
                name="Home"
                component={HomeStack}
            >
            </RootDrawer.Screen>

            <RootDrawer.Screen
                name="About"
                component={AboutStack}
            >
            </RootDrawer.Screen>
        </RootDrawer.Navigator>
    )
}