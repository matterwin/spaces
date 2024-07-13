import React from "react";
import { SafeAreaView, Button, Text, View, StyleSheet, Image } from "react-native";

const Dummy = () => {
  return(
    <View style={styles.container}>
      <Text>Logged in</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default Dummy;
