import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Splash from '../Screen/Splash'
import Login from '../auth/Login'

const Navigate=createStackNavigator ({
Splash:{
    screen:Splash,
    navigationOptions:{
     headerShown:false
    }
    
},
Login:Login



})

export default createAppContainer(Navigate)