
import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const App = () => {
  const images = [
    require("./assets/Success-card-1.png"),
    require("./assets/Success-card-2.png"),
    require("./assets/Success-card-3.png"),
  ];

  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>

        {/* Contenu vertical */}
        <Text style={styles.header1}>
          <Image source={require("./assets/Titre.png")} />
        </Text>
        <Text style={styles.header}>
          <Image source={require("./assets/succes.png")} />
        </Text>

        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          // showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </ScrollView>

        {/* Autre contenu vertical */}
        <Text style={styles.header}>
          <Image source={require("./assets/ensemble.jpg")} />
        </Text>
        <View style={styles.content1}>
          <Text>
            <Image source={require("./assets/Observance.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/intake-consecutive.png")} />
          </Text>
        </View>
        <View style={styles.content}>
          <Text>
            <Image source={require("./assets/missed-intake.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/symptom.png")} />
          </Text>
        </View>
        <Text>
          <Image source={require("./assets/semaine.png")} />
        </Text>

        <View style={styles.content}>
          <Text> </Text>
          <Text>
            <Image source={require("./assets/widget.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/Text.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/Text-block.png")} />
          </Text>
        </View>
        <Text style={styles.header}>
          <Image source={require("./assets/etapes.png")} />
        </Text>
        <View style={styles.content}>
          <Text>
            <Image source={require("./assets/Goal.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/next.png")} />
          </Text>
          <Text>
            <Image source={require("./assets/CTA.png")} />
          </Text>
        </View>

        <View style={styles.content}>
          <Text></Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header1: {
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 14,
    color: "darkblue",
    marginVertical: 20,
    marginBottom: 20,
  },
  carousel: {
    // width: 360,
    height: 360,
  },
  slide: {
    flex: 1,
    width: width - 40, // La largeur de l'écran moins le padding horizontal
    height: 350,
    padding: 8,
    // justifyContent: "center",

    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    zIndex: 1,
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    padding: 10,
    backgroundColor: "blank",
    borderRadius: 8,
  },
  content: {
    alignItems: "center",
    padding: 10,
    gap: 10,
    backgroundColor: "blank",
    borderRadius: 8,
  },
});

export default App;
