import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, TouchableOpacity, View, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from './../config/globalStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from './Card'


export default class Form extends Component {
    constructor(props){
        super(props)
        this.state= {
            title:"",
            body:"",
            rating:""
        }

        this.submitForm = this.submitForm.bind(this)
    }

    submitForm = ()=>{
        if(this.state.title==""||this.state.body==""||this.state.rating==""){
            return Alert.alert(
                "Insufficient Values",
                "Please make sure to write fill all the fields",
                ["Ok"]
            )
        }
        if(this.state.rating>5){
            return Alert.alert(
                "Incorrect Values",
                "Please make sure to rate only from 0 to 5",
                ["Ok"]
            )
        }
        let data = {
            title:this.state.title,
            body:this.state.body,
            rating:this.state.rating,
        }
        this.props.submitForm(data)
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.icon} onPress={()=>this.props.closeForm()}>
                            <Icon name="close" size={34} color="white"></Icon>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.title}>New Review</Text>
                        </View>
                    </View>
                    <ImageBackground 
                        source={require('./../../assets/background.jpg')}
                        style={globalStyles.container}
                        resizeMode="repeat"
                        resizeMethod="resize"
                        >
                        <Card>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder="Title"
                                value={this.state.title}
                                onChangeText={(value)=>this.setState({title:value})}
                            ></TextInput>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Body"
                                value={this.state.body}
                                onChangeText={(value)=>this.setState({body:value})}
                                multiline={true}
                            ></TextInput>
                            <TextInput
                                style={[globalStyles.input]}
                                placeholder="Rating (0-5)"
                                value={this.state.rating}
                                onChangeText={(value)=>this.setState({rating:value})}
                                keyboardType="number-pad"
                            ></TextInput>
                            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={this.submitForm}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </Card>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:55,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"crimson"
    },
    icon:{
        position:"absolute",
        left:0,
        marginLeft:15,
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
    },
    button:{
        width:80,
        padding:10,
        marginVertical:20,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        backgroundColor:"crimson",
    },
    buttonText:{
        color:"white"
    }
})
