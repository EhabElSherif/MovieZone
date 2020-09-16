import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../components/Card'

export default class ReviewDetails extends Component {
    constructor(props){
        super(props)

        this.renderRating = this.renderRating.bind(this)
    }

    renderRating = ()=>{
        let stars = []
        for (let index = 0; index < this.props.route.params.item.rating; index++) {
            stars.push(
                <Icon key={index} name="star" size={20} color="gold"></Icon>
            )
        }
        return stars
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Card>
                    <Text style={globalStyles.textTitle}> {this.props.route.params.item.title} </Text>
                    <View style={styles.rating}>
                        {this.renderRating()}
                    </View>
                    <Text style={globalStyles.textParagraph}> {this.props.route.params.item.body} </Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:"row",
        marginBottom:10,
    }
})