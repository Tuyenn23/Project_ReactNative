import { Button, StyleSheet, Text, View } from 'react-native';

export default function TrangHome({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='Go to Page' onPress={() => navigation.navigate('Page')} />
        <Text>TrangHome</Text>
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