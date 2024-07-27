import { Pressable, StyleSheet, Text, View } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const SecondaryButton = ({label, onPress, onLongPress}:Props) => {
  return (
    <View>
         <Pressable
            style={ ({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
            onPress={ () => onPress && onPress()}
            onLongPress = { () =>  onLongPress && onLongPress() }
            
        >
            <Text style={styles.buttonText}>{ label }</Text>
        </Pressable>
    </View>
   
  )
}

const styles = StyleSheet.create({

    button: {
        //backgroundColor: '#5656D6',
        padding: 15,
        marginTop: 10,
        borderRadius: 15,
        borderColor: '#00df64',
        borderWidth: 2
    },
    buttonPressed:{
        backgroundColor: '#e2ffef'
        
    },
    buttonText:{
        color: '#00df64',
        fontWeight: 'bold',
        
    },
})
