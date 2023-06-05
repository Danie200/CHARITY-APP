import { useContext } from "react";
import { AppContext } from "../settings/globalVariables";
import { StyleSheet } from "react-native";
import {SafeArea } from "../components/safeArea"
import { Theme } from "../utils/theme";

export function Donate () {
    const { uid,setFirstName } = useContext(AppContext);

    return (
        <SafeArea>
          
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    title:{
        color:Theme.colors.brown300,
        fontSize:Theme.sizes[4]
    }
})