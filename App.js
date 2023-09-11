import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './pages/signin';


export default function App() {
  return (
    <>
    <Signin/>
    <StatusBar style="ligth" />
    </>
  );
}

 