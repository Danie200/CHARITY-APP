
import { View,StyleSheet,Text,TouchableOpacity,Alert} from "react-native";

export function Mycomponent ({title,location,id}) {
    return (
        <TouchableOpacity onPress={()=>{Alert.alert('info', `the job id is ${id}`)}}
         style  ={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtext}>{location}</Text>
        </TouchableOpacity>
    )

}

const styles= StyleSheet.create({
wrapper:{
    backgroundColor:'black',
    paddingVertical:80,
    paddingHorizontal:10,
    borderRadius:8,
    marginVertical:20
},
title: {
    color:'white',
    fontSize:18,
},
subtext:{
    color:'yellow',
    fontSize:14,
}
})