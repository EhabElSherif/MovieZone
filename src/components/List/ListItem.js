import React, { Component } from 'react'
import { Text,View, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../config/globalStyles'
import Card from '../Card'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={
                    ()=>{
                        this.props.navigation.navigate("ReviewDetails",
                        {item:this.props.item})
            }}>
                <Card>
                    <Text style={globalStyles.textParagraph}>{this.props.item.title}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
})
