import {useContext } from "react";
import { AppContext } from '../settings/globalVariables';
import { StyleSheet,View,Alert,} from "react-native";
import { SafeArea } from "../components/safeArea";
import { db } from '../settings/firebase.setting';
import { addDoc,collection } from "firebase/firestore";
import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';

export function Pay ({navigation,route}) {
    const {uid,email} = useContext(AppContext);
    const {project,amount} = route.params;

    const handlePostDonation = () => {
        addDoc(collection(db,'donations'),{
            amount:Number(amount),
            project:project,
            donatedByEmail:email,
            donatedByUid:uid,
            createdAt:new Date().getTime()
        })
        .then(() => {
            Alert.alert(
                'Message',
                'Your donation was successful!!',
                [
                    {text:'Go to Home',onPress:() => navigation.navigate('My Home')},
                    {text:'Go to History',onPress:() => navigation.navigate('History')},
                ]
            )   
        })
        .catch(error => {
            Alert.alert(
                'Message',
                error.message,
                [{text:'Dismiss'}]
            )
        })
    }


    return (
        <SafeArea>
            <View style={styles.container}>
            <Paystack  
        paystackKey={'pk_test_912a910eaac0e1f8580ec78e8715f1e94f6b491b'}
        amount={amount}
        billingEmail={email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
          navigation.navigate('My Home')
        }}
        onSuccess={(res) => {
          // handle response here
          handlePostDonation()
        }}
        autoStart={true}
      />
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})