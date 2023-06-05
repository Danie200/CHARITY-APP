import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { MyHome } from "./Home";
import { Login } from "./Login";
import {About} from "./about"
import { Signup } from './Signup';
import { Donate } from "./Donate";
import { FundRaiser } from "./fundraisers";
import {Create} from "./Create"
import { ForgotPassword } from "./ForgotPassword";

const Stack = createNativeStackNavigator();

export function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='My Home' component={MyHome} />
            <Stack.Screen name='Login' component={Login} options={{headerShown:true}} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Donate' component={Donate} />
            <Stack.Screen name="Fund Raisers" component={FundRaiser}/>
            <Stack.Screen name="Create" component={Create}/>
            <Stack.Screen name='Signup' component={Signup} options={{headerShown:true}} />
            <Stack.Screen name='ResetPassword' component={ForgotPassword} options={{headerShown:true}} />
        </Stack.Navigator>
    )
}