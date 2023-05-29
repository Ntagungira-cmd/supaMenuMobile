  import React,{useState,useReducer} from 'react'
  import { View, Text, StyleSheet } from 'react-native'
  import CustomInputField from '../components/customInputField/CustomInputField'
  import CustomButton from '../components/customButton/CustomButton'
  import { TouchableOpacity } from 'react-native'
  import { AntDesign } from '@expo/vector-icons';

  const initialFormState={
      email:"",
      password:""
    }

  const SigninPage = ({navigation}) => {
    
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
      navigation.navigate('Signup')
    }

    return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.minicontainer}>
          <Text style={styles.text}>Supa<Text style={styles.headerspan}>Menu</Text></Text>
          <View style={styles.microcontainer}>
            <Text style={styles.subtitles}>Welcome...</Text>
            <Text>Sign in to continue</Text>
          </View>
          <View style={styles.form}>
            <CustomInputField name="email" placeholder="enter email" icon="mail" keyBoardType="email-address" value={formState.email} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomInputField name="password" placeholder="password" icon="lock" keyBoardType="default" secureTextEntry={secureTextEntry} value={formState.password} onChange={(name, text)=>{handleChange(name,text)}}/>
            <CustomButton text="Sign in" onPress={handleProceed}/>
            <View style={styles.linecontainer}>
              <View style={styles.line} />
              <Text style={styles.linetext}>or</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.oauth}>
              <AntDesign name="google" style={styles.icon} />
              <TouchableOpacity>
                <Text style={styles.innertext}>Login With Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.oauth}>
              <AntDesign name="facebook-square" style={styles.icon} />
              <TouchableOpacity>
                <Text style={styles.innertext}>Login With facebook</Text>
              </TouchableOpacity> 
            </View>
            <Text style={styles.span}>Forgot password?</Text>
            <Text style={styles.normaltext}>Don't have an account? <Text style={styles.span} onPress={handlePress}>Register</Text></Text>
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
      paddingTop: 15,
      width:'100%'
    },

    microcontainer:{
      alignItems:'center',
      paddingTop: 15,
      width:'100%'
    },

    text:{
      fontSize:30,
      fontWeight:900,
    },
    
    headerspan:{
      fontSize:30,
      fontWeight:900,
      color: '#fc9403'
    },

    normaltext:{
      fontSize:15,
      fontWeight:300
    },

    span:{
      fontSize:17,
      fontWeight:600,
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

    oauth:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 3,
      padding:10,
      margin: 10,
    
    },

    innertext:{
      fontSize: 15,
      fontWeight: 600,
    }

  })

  export default SigninPage