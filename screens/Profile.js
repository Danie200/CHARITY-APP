import { useContext, useEffect, useState } from "react";
import { AppContext } from "../settings/globalVariables";
import { StyleSheet,SafeAreaView,Image,View,Text} from "react-native";
import { Theme } from "../utils/theme";
import { Button } from "react-native-paper";
import { db } from "../settings/firebase.setting";
import { getDoc,doc } from "firebase/firestore";

export function Profile ({navigation}) {
    const { uid} = useContext(AppContext);
    const [userRecords,setUserRecords] = useState({})

    //fetch dATA AFTER COMPONENT IS LOADED
 console.log(uid);
    useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc (doc(db,'users',uid))
            setUserRecords(snapShot.data())   
        }
        handleGetUserRecords();
    },[])
    console.log(userRecords);//delete after testing
    return ( 
       <SafeAreaView style={{backgroundColor:'green',flex:0.3}}>
       
         <Image
         style={{
            height:'100%',
            width:"300%",
            alignSelf:'center'
            
         }}
         source={{uri:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',}}/>
        

         <View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,borderColor:Theme.colors.gray100,marginTop:20}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Name</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.firstName} {userRecords.lastName}</Text>
            </View>
         </View>

         <View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,borderColor:Theme.colors.gray100}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Date Of Birth</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.dateOfBirth}</Text>
            </View>
         </View>

         <View style={{backgroundColor:'white',marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,borderWidth:2,borderColor:Theme.colors.gray100}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>City</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.city}</Text>
            </View>
         </View>

         <View style={{marginHorizontal:12,marginBottom:12,borderRadius:8,padding:12,backgroundColor:'white',borderWidth:2,borderColor:Theme.colors.gray100}}>
            <View style={{paddingLeft:9}}>
            <Text style={{fontWeight:'bold'}}>Bio</Text>
            <Text style={{fontWeight:'bold',fontSize:23}}>{userRecords.bioInfo}</Text>
            </View>
         </View>
         <View style={{marginHorizontal:12,paddingTop:30 }}>
         <Button 
         contentStyle={{paddingVertical:16}}
         style={{borderRadius:6}}
         buttonColor="#19A7CE"
         textColor="white"
         onPress={() => navigation.navigate('CreateProfile')}>
            Update
         </Button>
         </View>

       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   
})