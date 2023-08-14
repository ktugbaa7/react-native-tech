import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const LottieSample = () => {
    return (<>
   
        <View style={{flex:1, justifyContent:'center'}}>
            <LottieView style={{ width: "full", height: 300}} source={require("./animation.json")} autoPlay loop/>
        </View>
    </>
    )
}

export default LottieSample
