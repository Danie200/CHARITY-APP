import { useState } from "react"
import { View,Text,TouchableOpacity,FlatList,StyleSheet,SafeAreaView,Button} from "react-native"
import { TextInput } from 'react-native-paper';

export function login (){
    const [text,setText ]= useState('')
    const [number,setNumber] = React.useState('');
    return(
    <SafeAreaView style={styles.container}>
        <View>
            <Text>
                Charity App
            </Text>
        </View>

        <View>
            <TextInput
            label = 'EMAIL'
            value={text}
            mode='outlined'
            onChangeText={text => setText(text)}/>
        </View>
        <View>
            <TextInput
            label = 'PASSWORD'
            value={number}
            mode='outlined'
            onChangeNumber={number => setNumber(number)}/>
        </View>
        
        <TouchableOpacity>
            <View style={styles.buttonbox}>
                <View>
                    <Text>LOGIN</Text>
                </View>
            </View>
        </TouchableOpacity>

        <View>
            <View>
                <Text>
                    DON'T HAVE AN ACCOUNT?
                </Text>    
            </View> 
            <View>
                <Text>
                    Sign up
                </Text>    
            </View> 
        </View>
    </SafeAreaView>
    )
}

const styles= StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})