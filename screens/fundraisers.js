import { useContext, } from "react";
import { AppContext } from "../settings/globalVariables";
import { StyleSheet,View,Image,ScrollView,TouchableOpacity } from "react-native";
import { SafeArea } from "../components/safeArea";
import { Theme } from "../utils/theme";
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';





const LeftContent = props => <Avatar.Icon{...props} icon="heart"/>
export const FundRaiser  = () => (
        <SafeArea>
            <ScrollView>
            <Card>
                <Card.Cover source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02EDgUiL7gKjSGbpkRaK4bwKmOF1fPzhfww&usqp=CAU'}}/>      
                <Card.Title title="NIGERIA,NIG" subtitle="" left={LeftContent} />
                <Card.Content>
                <Text variant="titleLarge">HELP THE SICK AND CREATE MORE AWARENESS</Text>
                <Text variant="bodyMedium">support the sick </Text>
                </Card.Content>
                <View>
                    <Text style={styles.first}>__________________________________________</Text>
                    <Text style={styles.second}> $50 raised - Donation</Text>
                </View>
                <Card.Actions>
                <Button>Donate</Button>
                <Button>Cancel</Button>
                </Card.Actions>
            </Card>
            </ScrollView>
        </SafeArea>    
)

const styles=StyleSheet.create({
    first:{
        paddingLeft:15
    },
    second:{
        paddingLeft:13
    }
})
