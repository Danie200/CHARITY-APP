import React, {useState,useEffect } from "react";
import { View,StyleSheet,TextInput,Button,Image,TouchableOpacity} from "react-native";

export function Boxes ({w,h}) {
const [bg,setBg] = useState('oldlace');

const locatoin ='nigeria'
 function report (){
    console.log('enrollment was successful');
 }
 function welcome(){
    console.log('welcome banch uchiha');
 }
useEffect(()=>{
    console.log('u are in',locatoin);
},[])

return(
    <View style={[style.myBox,{width:w,height:h,backgroundColor:bg}]}>
       <Button Title= 'enroll now>>>>' onPress={report}/> 

       <TouchableOpacity>
        <image source ={{uri:'https://www.earlycode.net/_next/image?url=%2Fimages%2Fearlycode_logo.png&w=128&q=75'}}/>
        style={{width:48, height:30}}
       </TouchableOpacity>
    </View>
)

}
 
const maths=(a,b)=>{
    const [number, onchangenumber]= React.useState('')

    return (
        
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
  );
};



const style= StyleSheet.create({
mybox: {
    //backgroundcolour:'black'
    marginTop:20,
    borderwidth:2,
    borderColor:'yellow'
},
input:{
    borderwidth:1,
    borderColor:2,
    borderColor:'yellow'
}

})