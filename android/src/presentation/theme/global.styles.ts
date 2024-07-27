import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    centerContainer:{
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    title:{
        fontSize: 80,
        fontWeight: '300',
        color: 'black'
    },
    fabRight: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 15,
    },
    fabLeft: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 15,
    },
})