import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,Animated} from 'react-native'



export default class Splash extends Component {
    constructor(navigation){
        super(navigation)
    }
state={
    LogoAnime: new Animated.Value(0),
    LogoText:new Animated.Value(0),
    loadingSpiner:false
}

componentDidMount(){
    const {LogoAnime,LogoText} = this.state;
    Animated.parallel([Animated.spring(LogoAnime, {
        toValue:1,
        tension:4,
        friction:2,
        duration:5000
    }).start(),
    Animated.timing(LogoText, {
        toValue:1,
        duration:50000,
    }),
]).start(()=>{
    this.setState({
        loadingSpiner:true
    })
})
}

    render() {
            setTimeout(() => {
               this.props.navigation.navigate('Login')
            }, 50);   
        
            return (
            <View style={styles.container}>
                <Animated.View style={{opacity:this.state.LogoAnime,
                top:this.state.LogoAnime.interpolate({
                    inputRange:[0,1],
                    outputRange:[80,0]
                })
                }}>
                <Image source={require('../assets/Images/Logo.png')} style={styles.img} />
            </Animated.View>
            </View>
        )
    }
}





const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(32, 197, 197, 0.99)'
    },
    img:{
        height:150,
        width:150
    }
})
