import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import List from './../components/List/List'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews:[
                {title:"Title 1",body:"Body Body Body 1",rating:"5",key:"1"},
                {title:"Title 2",body:"Body Body Body 2",rating:"3",key:"2"},
                {title:"Title 3",body:"Body Body Body 3",rating:"2",key:"3"},
                {title:"Title 4",body:"Body Body Body 4",rating:"1",key:"4"},
                {title:"Title 5",body:"Body Body Body 5",rating:"4",key:"5"},
                {title:"Title 6",body:"Body Body Body 6",rating:"5",key:"6"},
                {title:"Title 7",body:"Body Body Body 7",rating:"3",key:"7"},
            ],
        }
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <List navigation={this.props.navigation} reviews={this.state.reviews}></List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})
