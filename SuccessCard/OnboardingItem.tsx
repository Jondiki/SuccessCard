import React from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import slides from "./slide.jsx";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.container}> {item.id}</Text>
        <Text style={styles.image}> {item.image} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    //   flex: 0.1,
    //   justifyContent: "center",
      //   marginBottom :0o10,
      

    },
  
  
});
