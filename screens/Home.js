import { View,Text,TouchableOpacity,Image,FlatList,StyleSheet,SafeAreaView,Platform,StatusBar,TextInput} from "react-native";
import {sampledata} from '../assets/data/sample-data'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { SafeArea } from "../components/safeArea";

export function Home () {
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
  <SafeAreaView>
<View style={styles.header}>
    <View style={styles.leftheader}>
        <Image 
        source={{
        uri:'data:data:image/jpeg;base64,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'
        }}
        alt='applogo'
        style={styles.logo}/>
        <Text style={styles.brandname}>Charity app</Text>
    </View>
<FontAwesomeIcon
                    icon={faUser} color="blue" size={36}/>
    </View>

<View style={styles.body}>
<View style={styles.actionblock}>
    <View style={styles.actionbox}>
    </View>

    <View style={styles.actionbox}>
    </View>

    <View style={styles.actionbox}>
    </View>

    <View style={styles.actionbox}>
    </View>

</View>
<View style={styles.recent}>
        <Text style={styles.recenTitle}> recent Donation</Text>

        <View style={styles.recentscroll}>
        <FlatList
        data={sampledata}
        renderItem={({item}) =>{
            return(
            <View style={styles.recentblock}>
            <View style={styles.donationdetails }>
                <Text style={styles.donationamount}>₦{item.amount}</Text>
                <Text style={styles.donationinfo}>{item.time} minutes ago</Text>
            </View>
                <Text style={styles.donatedby }> donatedby {item.email}</Text>
                </View>
                )}}
                    key={({item})=> item.id}
                    showsVerticalScrollIndicator={false}/>
                </View>
            </View>
</View>
       
  </SafeAreaView>
 )
         }
const styles= StyleSheet.create({
  
  header:{
    flexDirection:'row',
     justifyContent:"space-between"
  },
  leftheader:{
    flexDirection:"row",
    alignItems:'center'
  },
  logo:{
    width:52,
    height:52,
    marginRight:4
  },
  brandname:{
    fontSize:28,
    fontWeight:"bold",
    color:'red',
    fontFamily:'Pacifico_400Regular'
  },
  headericon:{
    width:48,
    height:48

  },
  body:{
    flex:1,
    marginTop:10
  },
  actionblock:{
    flex:2.5,
   flexDirection:'row',
   justifyContent:'space-between',
   flexWrap:"wrap",
   gap:2,
   backgroundColor:"#E34DA2",
   padding:8,
   borderRadius:10,
   
  },
  recent:{
    flex:3.5,
    marginTop:8,
    padding:8,
    borderRadius:8,
    backgroundColor:'#fde2f3'
    
  },
  actionbox:{ 
    width:'49%',
    height:'49%',
    backgroundColor:"#77037B",
    borderRadius:10,
  },
  recenTitle:{
    fontSize:22,
    marginBottom:2
  },
  recentblock:{
    backgroundColor:"#5c469c",
    paddingHorizontal:6,
    paddingVertical:8,
    gap:4,
    borderRadius:8,
    marginBottom:3,
  },
  recentscroll:{
    flex:1,
    flexDirection:'column',
  },
  donationdetails:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  donationamount:{
    fontSize:20,
    color:"#fff"
  },
  donationinfo:{
    color:'#d4adfc',
    fontSize:16,
  },
  donatedby:{
    color:'#d4adfc',
    fontSize:16
  }

})


