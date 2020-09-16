import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={
                    ()=>this.props.navigation.openDrawer()
                }>
                    <Icon name="menu" size={34} color="white"></Icon>
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    icon:{
        position:"absolute",
        left:0,
        borderRadius:50,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        letterSpacing:1,
        color:"white",
        fontWeight:"bold",
        fontSize:20
    }
})
