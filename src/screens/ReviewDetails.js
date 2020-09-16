import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../components/Card'
import Header from '../components/Header'

export default class ReviewDetails extends Component {
    constructor(props){
        super(props)

        this.renderRating = this.renderRating.bind(this)
    }

    renderRating = ()=>{
        let stars = []
        for (let val = 1; val <= 5; val++) {
            stars.push(
                <Icon key={val} name="star" size={20} color={val>this.props.route.params.item.rating?"lightgrey":"gold"}></Icon>
            )
        }
        return stars
    }

    render() {
        return (
            <ImageBackground 
                style={globalStyles.container}
                source={require('./../../assets/background.jpg')}
                resizeMode="repeat"
                resizeMethod="resize"
            >
                <Card>
                    <Text style={globalStyles.textTitle}> {this.props.route.params.item.title} </Text>
                    <View style={styles.rating}>
                        {this.renderRating()}
                    </View>
                    <Text style={globalStyles.textParagraph}> {this.props.route.params.item.body} </Text>
                </Card>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    rating:{
        flexDirection:"row",
        marginBottom:10,
    }
})