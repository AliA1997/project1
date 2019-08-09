import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Timer = import('./components/Timer');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Harvard Cs50 Project1 Timer</Text>
        <Text style={styles.footerText}>by Ali Alhaddad</Text>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#000'
  },
  footerText: {
    fontSize: 8,
    color: 'lightgrey'
  }
});
