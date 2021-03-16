import React, { Component } from 'react'
import { View,StyleSheet,TextInput,TouchableOpacity,Text } from 'react-native'

export default class SignUp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                
                <TextInput placeholder='Name' style={styles.input}/>
                <TextInput placeholder='Email' style={styles.input}/>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} />
               
                <TouchableOpacity style={styles.Button}><Text style={styles.loginText}>Register</Text></TouchableOpacity>

            </View>
           
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,

    },
    input:{
        borderBottomColor: '#4f504e',
        borderBottomWidth:1,
        margin:10,
    },
    Button:{
    backgroundColor:'#00a4ef',
    margin:10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    },
    loginText:{
        alignSelf:'center',
        color:'#fff',
        margin:7,
    }
})
