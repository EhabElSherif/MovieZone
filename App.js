import React, { Component } from 'react'
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