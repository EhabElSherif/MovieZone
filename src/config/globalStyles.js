import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingBottom:0
    },
    textTitle:{
        fontSize: 22,
        fontWeight: "bold",
    },
    textParagraph:{
        fontSize: 18,
        marginVertical:8,
        lineHeight:20,
    },
    input:{
        marginVertical:10,
        padding:10,
        borderBottomWidth:2,
        borderBottomColor:"#999",
        borderRadius:5,
        backgroundColor:"#EEE",
    }
});