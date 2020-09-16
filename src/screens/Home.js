import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Modal, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import List from './../components/List/List'
import Form from '../components/Form'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            formOpen:false,
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

        this.closeForm = this.closeForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    closeForm = ()=>{
        this.setState({formOpen:false})
    }

    submitForm = (data)=>{
        let newReview = {...data,key:Math.random().toString()}
        this.setState({reviews:[newReview,...this.state.reviews]})
        this.setState({formOpen:false})
        return Alert.alert(
            "Congratulations",
            "Your review is submitted successfully",
        )
    }

    render() {
        return (
            <ImageBackground 
                style={globalStyles.container}
                source={require('./../../assets/background.jpg')}
                resizeMode="repeat"
                resizeMethod="resize"
            >
                <Modal 
                    visible={this.state.formOpen}
                    animationType="slide"
                    onRequestClose={()=>this.setState({formOpen:false})}
                >
                    <Form closeForm={this.closeForm} submitForm={this.submitForm}></Form>
                </Modal>
                <List navigation={this.props.navigation} reviews={this.state.reviews}></List>
                <TouchableOpacity style={styles.formButton} onPress={()=>this.setState({formOpen:true})}>
                    <Icon name="add" size={34} color="white"></Icon>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    formButton:{
        position:"absolute",
        right:25,
        bottom:35,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"crimson",
        justifyContent:"center",
        alignItems:"center",
    }
})
