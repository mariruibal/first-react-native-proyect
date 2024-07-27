import { SafeAreaView, Text, View } from "react-native"
import { HellosWorldScreen } from "./android/src/presentation/screens/HellosWorldScreen"
import { CounterScreen } from "./android/src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./android/src/presentation/screens/CounterM3Screen"

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props}/>
      }}
    >
       <SafeAreaView style={{ flex: 1}}>
          {/* <HellosWorldScreen name='Mariana Ballesteros'/> */}
          {/* <CounterScreen/> */}
          <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
   
  )
}



