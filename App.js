import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupPage  from './screens/SignupPage';
import SigninPage from './screens/SigninPage';
import WelcomePage from './screens/WelcomePage';
import ScanPage from './screens/ScanPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomePage} 
          options={{headerShown:false}}
          />
        <Stack.Screen 
          name="Signup" 
          component={SignupPage}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Signin'
          component={SigninPage}
          options={{headerShown:false}}
        />
      <Stack.Screen
        name='Scan'
        component={ScanPage}
        options={{headerShown:false}}
      />
    </NavigationContainer>
  );
}