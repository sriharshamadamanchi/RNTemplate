import { StyleSheet, View } from "react-native"
import { CurvedButton, Label } from "../../common/components"
import { moderateScale } from "react-native-size-matters"
import { useNavigation } from "@react-navigation/native"
import { LoginOrRegisterScreenNavigationProp } from "../../common/navigation/types"
import WaveSVG from "../../common/theme/icons/wave.svg"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  labelStyle: {
    marginVertical: moderateScale(10)
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: moderateScale(20)
  },
  buttonStyle: {
    width: moderateScale(300),
    height: moderateScale(50),
    marginVertical: moderateScale(15)
  }
})

const LoginOrRegister = () => {
  const navigation = useNavigation<LoginOrRegisterScreenNavigationProp>()

  return (
    <View style = {styles.container}>

      <WaveSVG />

      <View style = {styles.subContainer}>
        <Label xxxl title = "Welcome !" style = {styles.labelStyle} />
        <CurvedButton
          buttonStyle = {styles.buttonStyle}
          title = "Register"
          onPress = {() => {
            navigation.navigate("Register")
          }}
        />
        <CurvedButton
          inverse
          buttonStyle = {styles.buttonStyle}
          title = "Login"
          onPress = {() => {
            navigation.navigate("Login")
          }}
        />
      </View>
    </View>
  )
}

export default LoginOrRegister
