import React,{useState,useEffect,useCallback} from 'react'
import { StyleSheet, View,Text,Switch } from 'react-native'

import {setFilters} from '../Store/Action/meals'
import {useDispatch} from 'react-redux'


const FilterSwitch=props=>{
    return(<View style={styles.Container}>
        
        <View style={styles.Gluten} >
            <Text>{props.title}</Text>
        <Switch value={props.state} onValueChange={props.onChange}/>
        
        </View>
    </View>
    )
}

const Filter=props=>{
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
  
const {navigation}=props;

const dispatch =useDispatch();

const saveFilter=useCallback(()=>{
    const applied={
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        vegetarian: isVegetarian
    };
    dispatch(setFilters(applied))
},[isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

useEffect(()=>{
    navigation.setParams({save:saveFilter});
},[saveFilter])
    return(
        <View style={styles.Container}>
        <Text style={styles.title}>Available Filters</Text>
        <FilterSwitch title='Gluten-Free'  state={isGlutenFree} onChange={newVal=> setIsGlutenFree(newVal)} />
        <FilterSwitch title='Lactos-Free'  state={isLactoseFree} onChange={newVal=> setIsLactoseFree(newVal)} />
        <FilterSwitch title='Vegan'  state={isVegan} onChange={newVal=> setIsVegan(newVal)} />
        <FilterSwitch title='Vegetarian'  state={isVegetarian} onChange={newVal=> setIsVegetarian(newVal)} />
        </View>
    )
};



Filter.navigationOptions=nav=>{
    return{
        headerTitle:'Filter Meals',
    headerLeft:()=><HeaderButtons HeaderButtonComponent ={HeaderButton} >
        <Item title='Menue' iconName='ios-menu' onPress={()=>{nav.navigation.toggleDrawer()}} />
    </HeaderButtons>,

headerRight:()=><HeaderButtons HeaderButtonComponent ={HeaderButton} >
<Item title='Save' iconName='ios-save' onPress={nav.navigation.getParam('save')} />
</HeaderButtons>
}};

const styles=StyleSheet.create({
    Container:{
       
        
        
    },
    title:{
        fontSize:20,
        fontFamily:'AllertaRegular',
        alignSelf:'center',
        margin:10
    
    },
    Gluten :{
        justifyContent:'space-between',
        flexDirection:'row',
        margin:10
       
        

        
    }
});

export default Filter;