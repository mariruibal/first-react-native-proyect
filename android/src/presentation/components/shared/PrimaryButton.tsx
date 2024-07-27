import { Pressable, StyleSheet, Text, View } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}:Props) => {
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
        borderRadius: 15,
        borderColor: '#5656D6',
        borderWidth: 2
    },
    buttonPressed:{
        backgroundColor: '#dcdcff'
        
    },
    buttonText:{
        color: '#5656D6',
        fontWeight: 'bold',
        
    },
})
