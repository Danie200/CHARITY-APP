import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../settings/globalVariables";
import { Formik } from "formik";
import { View,Text,TouchableOpacity,StyleSheet,Alert} from "react-native"
import { TextInput } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {Pacifico_400Regular} from "@expo-google-fonts/pacifico";
import {SafeArea} from "../components/safeArea"
import {Button} from "react-native-paper";
import * as yup from 'yup'
import { auth} from "../settings/firebase.setting";
import {createUserWithEmailAndPassword,onAuthStateChanged}  from "firebase/auth"

const  validationRules = yup.object({
    email:yup.string().required('you must fil this field').min(5).max(36),
    password:yup.string().required().min(4).oneOf([yup.ref('passwordConfirmation'),null],'password must match')
})

export function Signup ({navigation}){
    const {setUid} = useContext(AppContext)
    const [appIsReady, setAppIsReady] = useState(false);
   
    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({Pacifico_400Regular});
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
       return null;
    }

    return(
        <SafeArea>
            <View style={styles.heading}>
                <Text style={styles.title}>Charity App</Text>
                <Text style={styles.title2}>Create a donator account</Text>
           

            <Formik
                initialValues={{ email: '',password:'',passwordConfirmation:'' }}
                onSubmit={(values,action) =>{
                  createUserWithEmailAndPassword(auth,values.email,values.password)
                  .then(() => onAuthStateChanged(auth,(user) => {
                    setUid(user.uid);//update to the user's uid
                    Alert.alert(
                        'message',
                        'your account was created',
                        [{text:'go to Login',onPress:() => navigation.navigate('Login')}]
                    )
                  }))
                  .catch((error) =>{
                    //custom actions for different errors
                    if (error.code == 'auth/invalid-email') {
                        Alert.alert(
                            'message',
                            'invalid email',
                            [{text:'Try Again'}]
                        )
                    } else if (error.code == 'auth/email-already-in-use'){
                    Alert.alert(
                        'message',
                        'your account was created',
                        [{text:'go to Home',onPress:() => navigation.navigate('My home')},
                        {text:'ForgotPassword',onPress:() => navigation.navigate('ResetPassword')}])
                    }else {
                        Alert.alert(
                            'message',
                            'Something Went Wrong',
                            [{text:'Dismiss'}])
                    }
                  })
                }}
               
                validationSchema={validationRules}
            >
                {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                <View>
                  <View>
                  <TextInput
                    mode="outlined"
                    label={'email'}
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    {touched.email && errors.email
                    ? <Text styles={{color:"red"}}>{errors.email}</Text>
                    : null}
                  </View>
                    <TextInput
                    mode="outlined"
                    label={'password'}
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                    />
                    <TextInput
                    mode="outlined"
                    label={'passwordConfirmation'}
                    style={styles.input}
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    value={values.passwordConfirmation}
                    secureTextEntry={true}
                    />
                    <Button 
          mode="contained"
          onPress={handleSubmit}
          contentStyle={{paddingVertical:6,}}
          style={{marginVertical:12}}> create account </Button>
                    </View>
                )}
            </Formik>
            <View style={styles.account}>
                <Text >Already have an account? </Text>
                <TouchableOpacity onPress= {() =>navigation.navigate('Login')}>
                    <Text style={styles.sign}>Sign in</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create ({
    heading:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:280
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