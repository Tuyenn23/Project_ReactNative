import { Button, StyleSheet, Text, View } from 'react-native';

export default function Page({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='Go to home' onPress={() => navigation.navigate('TrangHome')} />
        <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});