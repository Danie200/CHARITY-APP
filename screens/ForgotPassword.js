import { View,TouchableOpacity,Text,StyleSheet,Alert,ActivityIndicator} from "react-native";
import {SafeArea} from "../components/safeArea"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback } from "react";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { auth} from "../settings/firebase.setting";
import { sendPasswordResetEmail } from "firebase/auth";

const validationRules = yup.object({
  email:yup.string().required('you must fill this form').min(5).max(36),
});

export function ForgotPassword ({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    const [eventActivityIndicator,seteventActivityIndicator]= useState(false);
    
    useEffect(() => {

        async function prepare() {
          try {
            await Font.loadAsync({Pacifico_400Regular});
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    

    return(
        <SafeArea>
            <View style={style.heding}>
            { eventActivityIndicator ? <ActivityIndicator size='large' color='green'/> :null}
                <Text style={style.title}>Charity App</Text>
                <Text style={style.title2}>Reset your Password</Text>

                <Formik
                initialValues={{ email:''}}
    onSubmit={(values,action) =>{
      seteventActivityIndicator(true);
      sendPasswordResetEmail(auth,values.email)
      .then
      (() => {Alert.alert( 'message',
      'your Reset Link Was Sent',
      [{text:'go to Login',onPress:() => navigation.navigate('Login')}])})
      .catch(error =>  {if (error.code == 'auth/invalid-email') {
        seteventActivityIndicator(false);
        Alert.alert(
            'message',
            'Invalid email/password',
            [{text:'Try Again'}]
        )
    } else if (error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found'){
      seteventActivityIndicator(false);
    Alert.alert(
        'message',
        'invalid email/password',
        [{text:'Try Again'}])
    }else {
      seteventActivityIndicator(false);
        Alert.alert(
            'message',
            'Something Went Wrong',
            [{text:'Dismiss'}])}
    })
  }}

    validationSchema={validationRules}
  >
    {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
      <View>

        <View>
            <TextInput
            label="Email"
            mode="outlined"
            Style={style.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
            {touched.email && errors.email ? 
            <Text style={{color:'red'}}>{errors.email}</Text>
            :null}
        </View>

        
        <View style={style.button}>
          <Button 
          mode="contained"
          onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>
    )}
          </Formik>
                  
                  <View style={style.account}>
                    <Text >Remembered your password </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={style.sign}>Go to signin</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              
          </SafeArea>
    )
}

const style = StyleSheet.create({
    heding:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:100
        },
    title:{
        fontSize:35,
        fontFamily:'Pacifico_400Regular'
         },
    title2:{
        marginTop:15
    },
    input:{
        marginTop:15,
        width:300
    },
    button:{
      marginTop:20,
      width:300,
      height:70
    },
    account:{
      flexDirection:'row'
    },
    sign:{
      
      color:'blue'
    },
})