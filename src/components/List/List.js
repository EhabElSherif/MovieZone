import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native'
import ListItem from './ListItem'

export default class TodoList extends Component {

    constructor(props){
        super(props)
        
		this.renderItem = this.renderItem.bind(this)
    }

	renderItem = ({item})=>{
		return <ListItem navigation={this.props.navigation} item={item}></ListItem>
    }
    
    render() {
        return (
            <View style={styles.list}>
                {
                    this.props.reviews.length == 0 ?
                    <Text style={{alignSelf:"center",color:"#333",marginTop:10}}>No Reviews</Text>
                    :
                    <FlatList 
                        data={this.props.reviews}
                        keyExtractor={(item)=>item.key}
                        renderItem={this.renderItem}
                    ></FlatList>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
	list:{
		flex:1,
    },
});