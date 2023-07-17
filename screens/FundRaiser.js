import { useState } from "react";
import { StyleSheet,View,ScrollView} from "react-native";
import {SafeArea} from '../components/safeArea'
import { Button, Card, Text,TextInput} from 'react-native-paper';
import { Theme } from '../utils/theme';
import { db } from '../settings/firebase.setting';
import { getDoc,doc } from "firebase/firestore";
import * as yup from 'yup';
import { Formik } from "formik";
import {numberWithCommas} from '../utils/numberwithcommas'

const validationRules = yup.object({
        amount:yup.number().required().min(100)
  });

export function FundRaiser ({navigation,route}) {
    const {projectId} = route.params;
    const [fundRaisers,setFundRaisers] = useState({});
    const [hideOrShowForm,setHideOrShowForm] = useState(false)

   const handleGetFundRaiser = async () => {
     const docSnap = await getDoc(doc(db,'Project',projectId))
     setFundRaisers(docSnap.data());
   }
   handleGetFundRaiser();
   console.log(fundRaisers);
    return (
       
            <SafeArea>
                <View style={styles.container}>
                    <ScrollView style={styles.card}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content style={styles.cardContent}>
                            <Text variant="headlineMedium">{fundRaisers.title}</Text>
                            <Text variant="titleLarge" style={{color:'green',marginVertical:Theme.sizes[3]}}>
                                Target: ₦{numberWithCommas(fundRaisers.target)}
                            </Text>
                            <Text variant="bodyMedium">{fundRaisers.description}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button 
                            buttonColor="white"
                            onPress={() => {
                                if (hideOrShowForm) {
                                    setHideOrShowForm(false)
                                } else if (!hideOrShowForm) {
                                    setHideOrShowForm(true)
                                }
                            }}
                        >{hideOrShowForm ? 'Cancel' : 'Dontate'}</Button>
                        </Card.Actions>
    
                        <View style={{display:hideOrShowForm ? 'flex' : 'none'}}>
                            <Formik
                                initialValues={{ amount: '',}}
                                onSubmit={(values,action) => {
                                    //navigate to "Pay" screen with details
                                    navigation.navigate('Pay',{
                                        project:fundRaisers.title,
                                        amount:values.amount,
                                    })
                                }}
                                validationSchema={validationRules}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                                    <>
                                    <View style={styles.inputRow}>
                                        <TextInput
                                        style={{width:'100%'}}
                                        outlineColor={Theme.colors.gray100}
                                        activeOutlineColor={Theme.colors.gray200}
                                        mode="outlined"
                                        label='amount'
                                        onChangeText={handleChange('amount')}
                                        onBlur={handleBlur('amount')}
                                        value={values.amount} 
                                        />
                                        {touched.amount && errors.amount 
                                        ? <Text style={{color:'red'}}>{errors.amount}</Text> 
                                        : null}
                                    </View>
    
                                    <Button
                                    buttonColor='green'
                                    mode="contained"
                                    onPress={handleSubmit}
                                    contentStyle={{paddingVertical:6,}}
                                    style={{borderRadius:6}}>CONTINUE</Button>
                                    </>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </SafeArea>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //gap:Theme.sizes[3],//remove this line and set margin bottom on Card
    },
    card:{//add this
        marginBottom:Theme.sizes[3],
      
    }, 
    //create a PayStack account at https://dashboard.paystack.com/#/signup
    //we will setup card payments on our next class
    cardContent:{
        paddingVertical:Theme.sizes[2],
        marginVertical:Theme.sizes[3]
    },
    donateBtn:{
        backgroundColor:Theme.colors.gray400,
    },
    inputRow:{ 
     marginBottom:Theme.sizes[2]}
})