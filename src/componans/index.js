import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
   StatusBar
} from "react-native";

import { DATA } from "./Data";
import NFTImage from "./NFTImage";

const Home = () => {
  const [spotyfay, setspotyfay] = useState(DATA);
    return (
      <SafeAreaView  style={{flex:1}}>
        <View style={{flex:1}}>
            <FlatList horizontal showsVerticalScrollIndicator={false}
              data={spotyfay}
              renderItem={({ item }) => <NFTImage NFTData={item}  />}
              keyExtractor={(item) => item.id}
            />

        </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:10,
  },
  notFoundText: {
    color:"white",
    fontFamily: 25,
    fontSize: 25,
  },
});