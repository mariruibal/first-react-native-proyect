import { useState } from "react"
import {Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton, SecondaryButton } from "../components";
import { IconButton, Button } from "react-native-paper";


export const CounterScreen = () => {

    const [ count, setCount] = useState<number>(10);

    const incrementar = () => {
        setCount(count + 1);
    }  
    const decrementar = () => {
        setCount(count - 1);
    }  
    return (
        <View style= { styles.container }>
        <Text style= {styles.text}>{count}</Text>

        {/* <PrimaryButton 
            label='Incrementar'
            onPress={() => {incrementar()}}
            onLongPress={() => setCount(0)}
        /> */}
        <Button 
           
            onPress={() => {incrementar()}}
            onLongPress={() => setCount(0)}
            mode='contained'
        >
            Incrementar
        </Button>

        
        <SecondaryButton 
            label='Decrementar'
            onPress={() => {decrementar()}}
            onLongPress={() => setCount(0)}
        />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flexGrow: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
       fontSize: 80,
       color: 'black',
       fontWeight: '300'
    },
    
  })

