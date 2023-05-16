import { View,Text,TouchableOpacity,Image,FlatList,StyleSheet,SafeAreaView,Platform,StatusBar,T} from "react-native";
import { useState } from "react";
import{TextInput} from 'react-native-paper';
import { SafeArea } from "../components/safeArea";
export function About () {
    const [text,setText ]= useState('')
    return(
        <safeArea>
        <TextInput
        label = 'EMAIL'
        value={text}
        mode='outlined'
        onChangeText={text => setText(text)}/>
    </safeArea>
    )}