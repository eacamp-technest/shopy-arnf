import { NativeStackNavigationOptions } from "@react-navigation/native-stack"

const defaultScreenOptions:NativeStackNavigationOptions={
    headerShown:false,
    orientation:'portrait',
}

export  const authScreenOptions:NativeStackNavigationOptions = {
   ...defaultScreenOptions,
    contentStyle:{
      backgroundColor:'white',
      paddingHorizontal:24
    }
  }