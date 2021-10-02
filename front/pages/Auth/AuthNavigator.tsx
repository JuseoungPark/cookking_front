import 'react-native-gesture-handler';
// import * as React from 'react';
import { createStackNavigator  } from "@react-navigation/stack";
// import Signup from "../screens/Auth/Signup";
// import Confirm from "../screens/Auth/Confirm";
import Login from "./Login";

// 다시다시 정리
// Auth.tsx
import React from 'react'
// import { getToken, setToken, removeToken } from './utils.tsx'

interface AuthState {
    userToken: string | undefined | null
    status: 'idle' | 'signOut' | 'signIn'
}
type AuthAction = { type: 'SIGN_IN'; token: string } | { type: 'SIGN_OUT' }
type AuthPayload = string

interface AuthContextActions {
    signIn: (data: AuthPayload) => void
    signOut: () => void
}

interface AuthContextType extends AuthState, AuthContextActions {}

const AuthContext = React.createContext<AuthContextType>({
    status: 'idle',
    userToken: null,
    signIn: () => {},
    signOut: () => {},
})

// export const AuthProvider = ({ children }: {children: React.ReactNode }) => {
//     const [state, dispatch] = React.useReducer(AuthReducer, {
//         status: 'idle',
//         userToken: null,
//     })
// }

const AuthNavigation = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthNavigation.Navigator initialRouteName="Login" headerMode="none">
            <AuthNavigation.Screen name="Login" component={Login}/>
            {/* <AuthNavigation.Screen name="Signup" component={Signup}/>
            <AuthNavigation.Screen name="Confirm" component={Confirm}/> */}
        </AuthNavigation.Navigator>
    );
}

export default AuthNavigator;