import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import userImg from "../assets/foto.png";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();
  

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  var today = new Date();
  var hourNow = today.getHours();

  var msg;

  if (hourNow > 18) {
    msg = "Boa noite, ";
  } else if (hourNow > 12) {
    msg = "Boa tarde, ";
  } else if (hourNow > 0) {
    msg = "Bom dia";
  } else {
    msg = "Seja bem-vindo! ";
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{msg}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
