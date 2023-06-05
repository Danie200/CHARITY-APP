import { View,TouchableOpacity,Text,StyleSheet,Alert} from "react-native";
import {SafeArea} from "../components/safeArea"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState,useEffect,useCallback,useContext } from "react";
import { AppContext } from "../settings/globalVariables";
import { TextInput,Button } from 'react-native-paper';
import * as yup from 'yup';
import { Formik } from "formik";
import { MyHome } from "./Home";


const validationRules = yup.object({
    fName:yup.string().required('Required Field',),
    lName:yup.string().required('Required Field',),
    city:yup.string().required('Required Field',),
    mail:yup.string().required('Required Field',).min(16),
    dob:yup.string(),
    bio:yup.string(),
});

export function CreateProfile ({navigation}) {
    const {setUid} = useContext(AppContext)
    const [appIsReady, setAppIsReady] = useState(false);
    
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
                <Text style={style.title}>Create your Profile</Text>
               

                <Formik
                initialValues={{fName:'',lName:'',mail:'',city:'',dob:'',bio:'', }}
    onSubmit={(values,action) =>{
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


        
        <View>
            <TextInput
            label='password'
            mode="outlined"
            style={style.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            />
            {touched.password && errors.password ?
            <Text style={{color:'red'}}>
              {errors.password}</Text>:null}
        </View>
        
        <View style={style.button}>
          <Button
          textColor="black" 
          mode="contained"
          onPress={handleSubmit}
          buttonColor="hotpink">
            Login
          </Button>
        </View>
      </View>
    )}
          </Formik>
                  
                  <View style={style.account}>
                    <Text >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                      <Text style={style.sign}>Sign up</Text>
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
        marginBottom:280
        },
    title:{
        fontSize:35,
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