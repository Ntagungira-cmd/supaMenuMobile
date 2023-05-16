  import React,{useState,useReducer} from 'react'
  import { View, Text, StyleSheet } from 'react-native'
  import CustomInputField from '../components/customInputField/CustomInputField'
  import CustomButton from '../components/customButton/CustomButton'

  const initialFormState={
      names:"",
      phone:"",
      email:"",
      password:""
    }

  const SignupPage = ({navigation}) => {
    
    const formReducer = (state, action)=>{
      switch (action.type) {
        case "ONCHANGE":
          return{
            ...state,
            [action.field]:action.payload
          }
        default:
          return state;
      }
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleChange = (name, text) => {
      dispatch({
        type: "ONCHANGE",
        field: name,
        payload: text
      });
    };

    const handleProceed = ()=>{
      console.log(formState)
    }

    const handlePress = ()=>{
      navigation.navigate('Signin')
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
            <CustomInputField name="names" placeholder="full name" icon="user" keyBoardType="default" value={formState.names} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomInputField name="phone" placeholder="Enter number" icon="phone" keyBoardType="numeric" value={formState.phone} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomInputField name="email" placeholder="enter email" icon="mail" keyBoardType="email-address" value={formState.email} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomInputField name="password" placeholder="password" icon="lock" keyBoardType="default" secureTextEntry={secureTextEntry} value={formState.password} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomButton text="Proceed" onPress={handleProceed}/>
            <View style={styles.linecontainer}>
              <View style={styles.line} />
              <Text style={styles.linetext}>or</Text>
              <View style={styles.line} />
            </View>
            <Text>If you already have an account</Text>
            <CustomButton text="sign in" onPress={handlePress}/>
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