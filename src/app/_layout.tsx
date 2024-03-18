import { Slot} from 'expo-router'

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
}  from '@expo-google-fonts/poppins'

export default function Layout(){
  const [fontsLoader] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  
  if(!fontsLoader){
    return
  }


  
  
  
    return fontsLoader ? <Slot/> : null
}