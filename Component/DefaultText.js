import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
export default class DefaultText extends Component {
    render() {
        
        return (
            <View>
            <Text>{this.props.children}</Text>
        </View>
        )
    }
}

const styles=StyleSheet.create({

})
