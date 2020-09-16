import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { globalStyles } from './../config/globalStyles'

export default class About extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.textTitle}> About Screen </Text>
                <Text style={globalStyles.textParagraph}>Welcome to About screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})