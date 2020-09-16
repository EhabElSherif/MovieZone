import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Card extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        borderRadius:8,
        elevation:4,
        backgroundColor:"white",
        shadowOffset:{width:1,height:1},
        shadowColor:"#333",
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10
    }
})
