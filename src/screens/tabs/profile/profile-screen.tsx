import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { View } from "../../../../components/customs"
import { ProfileStackParamList } from "../../../navigation/profile"
type ProfileScreenProps = NativeStackScreenProps<ProfileStackParamList>
export const ProfileScreen = ({navigation}: ProfileScreenProps) => {
    return(
        <View></View>
    )
}