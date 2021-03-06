import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native'
import Colors from './Colors'



const CustomHeaderButton=props=>{
return<HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS=='android'?'white': Colors.primaryColor} />
}

export default CustomHeaderButton;