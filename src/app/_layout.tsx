import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
    useFonts
} from '@expo-google-fonts/inter'

import{Loading} from "@/components/loading"
export default function Layout() {
    const[fontsLoaded]=useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_800ExtraBold,
    })
    if(!fontsLoaded){
        return <Loading/>
    }

    return (
        <SafeAreaView className="flex-1 bg-slate-900">
            <Slot />
        </SafeAreaView>

    )

}