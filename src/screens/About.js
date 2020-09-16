import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import Card from '../components/Card'

export default class About extends Component {
    render() {
        return (
            <ImageBackground 
                style={globalStyles.container}
                source={require('./../../assets/background.jpg')}
                resizeMode="repeat"
                resizeMethod="resize"
            >
                <Card>
                    <Text style={globalStyles.textParagraph}>Welcome to About screen</Text>
                </Card>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
})