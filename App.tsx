import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRootNavigator } from './src/navigation/app.provider';

export default function App() {
  return (
   <AppRootNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003E9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
