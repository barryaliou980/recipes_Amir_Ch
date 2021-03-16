import React from 'react'
import { StyleSheet, View,FlatList,Text,TouchableOpacity } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryTiles from '../Component/CategoryTiles'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../Component/HeaderButton'
import {Ionicons} from 'react-native-vector-icons'



const Categories=props=>{
    const renderGridItem=(itemData)=>{
        return(
            <CategoryTiles 
            title={itemData.item.title}
            color={itemData.item.color} 
            image={itemData.item.imageUrl}
            
            onSelect={()=>{
                props.navigation.navigate('CategoriesMeals',params={
                    categoriesid:itemData.item.id
            })}} />
        )
        };
    return(
            
        <FlatList 
        numColumns={2} 
        data={CATEGORIES} 
        renderItem={renderGridItem}
        keyExtractor={(item,index)=>item.id}
        />
        
    )
};

Categories.navigationOptions=nav=>{
    return{
    headerLeft:()=><HeaderButtons HeaderButtonComponent ={HeaderButton} >
        <Item title='Menue' iconName='ios-menu' onPress={()=>{nav.navigation.toggleDrawer()}} />
    </HeaderButtons>
}};

const styles=StyleSheet.create({
    Container:{
        
        paddingVertical:10
    },
    
});

export default Categories;