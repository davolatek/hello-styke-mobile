import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "../customs"
import { AntDesign } from '@expo/vector-icons';
import { DEVICE_HEIGHT } from "../../src/constants";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

type props = {
    title: string,
    goBack?: boolean,
    children: ReactNode
}
export const AuthLayout = ({ title, goBack, children }: props) => {
    const navigation = useNavigation()
    return (
        <View
            bgColor='white.100'
            safeArea
            height={DEVICE_HEIGHT}
            paddingTop='7' 
            paddingLeft='5'
            paddingRight='5'>
            {
                goBack ? <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity> : null
            }
            <Text color='black.100' fontFamily='Poppins-SemiBold' style={styles.text}>{title}</Text>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
text:{
    lineHeight: 40,
    marginTop: 55,
    fontSize: 30,
    textAlign: 'left'
}
})