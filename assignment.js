
import { View,Text,TouchableOpacity,FlatList,StyleSheet,SafeAreaView,TextInput, Button} from "react-native";
import React, {useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faHeart} from"@fortawesome/free-solid-svg-icons"
import {sampledata} from "./assets/data/sample-data"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function app () {
    const [text, onChangeText] = React.useState('charity@gmail.com');
      const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <View style={styles.secondheader}>
        <FontAwesomeIcon
          icon={ faHeart} size={50} color="red"/>
          <Text style={styles.note}>CHARITY APP </Text>
          </View>
                    <View style={styles.top}>
                         <FontAwesomeIcon icon={faUser} size={23} color="red"/>
                         <TouchableOpacity>
                         <Text>SIGN IN</Text>
                         </TouchableOpacity>
                     </View>
            </View>
             
             <View style={styles.secondnote}>
                  <Text >CHARITY SERVERS</Text>
                  <TouchableOpacity>
                  <Text >HELP</Text>
                  </TouchableOpacity>
             </View>

        <View style={styles.middle}>

         <Text style={styles.font}> TYPE YR EMAIL  </Text>
             <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.fontnum}> INPUT YR PASSWORD </Text>
      <TextInput
        style={styles.inputNUM}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="11223344"
        keyboardType="numeric"
      />
                <Button title="LOGIN"style={styles.bottonfont}/>
            </View>

          
            <View style={styles.note2}>
              <Text> HISTORY</Text>
              <TouchableOpacity>
              <Text> CLEAR </Text>
              </TouchableOpacity>
            </View>

           
        <View  style={styles.payscroll}>
          <FlatList
            data={sampledata}
            renderItem={({item})=>{
              return(
                <View style={styles.payers} >
                <Text >payment: ₦{item.amount}</Text>
                
                   </View>   )}}       
                key={({item}) =>item.id}
              showsVerticalScrollIndicator={true}/>
                </View>

<View style={styles.end}>
<TouchableOpacity>
                <View style={styles.end2}>
                  <FontAwesomeIcon icon={faHouse} size={20} color="red"/>
                  <Text>HOME</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View>
                  <FontAwesomeIcon icon={faGear} size={22} color="red"/>
                  </View>
                  </TouchableOpacity>
     </View>
    
  </SafeAreaView> )}
   
  


const styles= StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1
  },

  header :{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:41,
    backgroundColor:'green',
  },
   secondheader:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
   },
   note :{
    flexDirection:"row",
    justifyContent:'center',
    fontSize:23,
    
   },
   secondnote :{
    justifyContent:'space-between',
    paddingTop:20,
    flexDirection:"row",
    paddingBottom:50,
    backgroundColor:'green'
   },
   input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white'
  },
   
   inputNUM:{
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    paddingBottom:5
   },
   box:{
    height:10,
    width:15
   },
   box2:{
    height:10,
    width:15
   },
   note2:{
    flexDirection:"row",
    paddingTop:10,
    justifyContent:'space-between',
    paddingLeft:15,
    backgroundColor:'green'
   },
   box3:{
       backgroundcolour:'black',
    marginTop:20,
    borderwidth:2,
    borderColor:'yellow'
   },
   payscroll:{
    flexDirection:'column',
    backgroundColor:"green",
    flex:1,

   },
   font:{
      fontSize:20
   },
   fontnum:{
    fontSize:20,
    marginTop:20,
   },
   middle:{
      backgroundColor:'green'
   },
   top:{
    alignItems:'center'
   },
   bottonfont:{
    fontSize:15,
    
    
   },
   payers:{
    paddingHorizontal:12,
    paddingVertical:18,
    gap:8,
    borderRadius:9,
    marginBottom:5,
    backgroundColor:'white'
   },
   end:{
      flexDirection:'row',
      justifyContent:'space-around',
      padding:10,
      backgroundColor:'green'
   },
   end2:{
    alignItems:"center"
   }
  })