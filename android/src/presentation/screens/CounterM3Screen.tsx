import { useState } from "react"
import {Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";

import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

    const [ count, setCount] = useState<number>(10);

    return (
        <View style= { globalStyles.centerContainer }>
            <Text style= {globalStyles.title}>{count}</Text>

            {/* <Icon name="accessibility-outline" size={25} /> */}

            <FAB
                //icon="plus"
                // label='Incrementar'
                style={globalStyles.fabRight}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon='add'
            />

            <FAB
                //icon="plus"
                // label='Decrementar'
                style={globalStyles.fabLeft}
                onPress={() => setCount(count - 1)}
                onLongPress={() => setCount(0)}
                icon='remove-outline'
            />
       
        
        </View>
    )
}


