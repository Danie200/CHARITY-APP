import { useContext, useEffect, useState } from "react";
import { AppContext } from "../settings/globalVariables";
import { StyleSheet } from "react-native";
import {SafeArea } from "../components/safeArea"
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
    //console.log(userRecords);//delete after testing
    return (
        <SafeArea>
           <Button
           buttonColor="gray" onPress={()=> navigation.navigate('CreateProfile')}>Name:{userRecords.firstName}</Button>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
  container:{}
})