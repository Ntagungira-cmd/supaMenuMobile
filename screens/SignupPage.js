import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInputField from '../components/customInputField/customInputField'
import CustomButton from '../components/customButton/CustomButton'

const SignupPage = () => {
  const[val, setVal]=useState('');

  const handleProceed = ()=>{
  }

  const handleSignin = ()=>{
  }
  return (
  <View style={styles.container}>
    <View style={styles.subcontainer}>
      <View style={styles.minicontainer}>
        <Text style={styles.text}>Supa<Text style={styles.span}>Menu</Text></Text>
        <View style={styles.microcontainer}>
          <Text style={styles.subtitles}>Welcome...</Text>
          <Text>please fill in the information</Text>
        </View>
        <View style={styles.form}>
          <CustomInputField placeholder="full name" icon="user" keyBoardType="default" value={val}/>
          <CustomInputField placeholder="Enter number" icon="phone" keyBoardType="numeric" value={val}/>
          <CustomInputField placeholder="enter email" icon="mail" keyBoardType="email-address" value={val}/>
          <CustomInputField placeholder="password" icon="lock" keyBoardType="default" secureTextEntry="true" value={val}/>
          <CustomButton text="Proceed" onPress={handleProceed}/>
          <View style={styles.linecontainer}>
            <View style={styles.line} />
            <Text style={styles.linetext}>or</Text>
            <View style={styles.line} />
          </View>
          <Text>If you have a PMG account</Text>
          <CustomButton text="sign in" onPress={handleSignin}/>
        </View>
      </View>
    </View>
  </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc9403',
  },

  subcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    width:'100%',
    marginTop: 80,
    backgroundColor: '#ffff',
  },

  minicontainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },

  microcontainer:{
   alignItems:'center',
   paddingTop: 15
  },

  text:{
    fontSize:30,
    fontWeight:900,
  },

  span:{
    fontSize:30,
    fontWeight:900,
    color: '#fc9403'
  },

  subtitles:{
    color: '#222582',
    fontWeight: 800,
    fontSize: 16,
    marginBottom: 10
  },

  form:{
    flex: 1,
    alignItems: 'center',
    width:'100%',
    padding:20
  },

  linecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  linetext: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ccc',
    fontSize:20
  },

})

export default SignupPage