import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import { DrawerNavigator } from './src/navigation/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<DrawerNavigator></DrawerNavigator>
			</NavigationContainer>
		)
	}
}

const styles = StyleSheet.create({})
