import React, { Component } from 'react'
import { View ,TouchableOpacity,TouchableNativeFeedback,StyleSheet,ImageBackground,Platform,Text} from 'react-native'

export default class CategoryTiles extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        let TouchableCom=TouchableOpacity;
        if(Platform.OS=='android' && Platform.Version>=21){
            TouchableCom=TouchableNativeFeedback;
        }
        return (
            <View style={styles.itemgrid}>
                 <TouchableCom
            onPress={this.props.onSelect}
            >
                <View style={{...styles.Container,...{backgroundColor:this.props.color}}}>
                <ImageBackground source={{uri:this.props.image}} style={styles.img}>
                <Text style={styles.title}>{this.props.title}</Text>
                </ImageBackground>
                </View>
            </TouchableCom>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    itemgrid:{
        flex: 1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden'
    },
    Container:{
        
       justifyContent:'flex-end',
        alignItems:'flex-end',
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:2,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3


    },
    title:{
        fontSize:17,
        fontWeight:'900',
        backgroundColor:'rgba(0,0,0,0.5)',
        color:'white',
        textAlign:'center',
        alignItems:'center'
        
    },
    img:{
        width:160,
        height:160,
       
    }
})