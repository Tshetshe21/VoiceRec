import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const CreateAccount = () => {
  return (
    <View style={styles.createAccount}>
      <Image
        style={[styles.nounSatelite55650921Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/nounsatelite5565092-1.png")}
      />
      <Text style={styles.createAccount1}>Create Account</Text>
      <View style={[styles.createAccountChild, styles.createLayout]} />
      <View style={[styles.createAccountItem, styles.createLayout]} />
      <Text style={[styles.eMail, styles.passwordTypo]}>E-mail</Text>
      <Image
        style={[styles.icons8Email3021, styles.icons8Email3021Position]}
        resizeMode="cover"
        source={require("../assets/icons8email30-2-1.png")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <View style={[styles.nounLock60049461, styles.icons8Email3021Position]}>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.createdBySaepul, styles.fromTheNounTypo]}>
          Created by Saepul Nahwan
        </Text>
        <Text style={[styles.fromTheNoun, styles.fromTheNounTypo]}>
          from the Noun Project
        </Text>
      </View>
      <View style={styles.createAccountInner} />
      <Text style={[styles.go, styles.goTypo]}>GO!</Text>
      <Text style={[styles.forgotPassword, styles.goTypo]}>
        Forgot Password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  createLayout: {
    height: 62,
    width: 296,
    borderColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    left: 72,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  icons8Email3021Position: {
    left: 90,
    position: "absolute",
  },
  fromTheNounTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_8xs,
    left: "0%",
    height: "20%",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  goTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  nounSatelite55650921Icon: {
    top: 149,
    left: 58,
    width: 331,
    height: 364,
  },
  createAccount1: {
    top: 51,
    left: 57,
    fontSize: 40,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  createAccountChild: {
    top: 708,
  },
  createAccountItem: {
    top: 590,
  },
  eMail: {
    top: 608,
    left: 177,
    width: 124,
    height: 29,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  icons8Email3021: {
    top: 606,
    width: 49,
    height: 31,
  },
  password: {
    top: 719,
    left: 168,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIcon: {
    height: "65%",
    width: "64.58%",
    top: "7.5%",
    right: "17.71%",
    bottom: "27.5%",
    left: "17.71%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  createdBySaepul: {
    width: "275%",
    top: "113.33%",
  },
  fromTheNoun: {
    width: "225%",
    top: "130%",
  },
  nounLock60049461: {
    top: 710,
    width: 54,
    height: 59,
    overflow: "hidden",
  },
  createAccountInner: {
    top: 818,
    left: 75,
    backgroundColor: "#6472bc",
    borderColor: "#083148",
    width: 293,
    height: 54,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    borderRadius: Border.br_31xl,
  },
  go: {
    top: 837,
    left: 214,
    width: 83,
    height: 24,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  forgotPassword: {
    top: 887,
    left: 152,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  createAccount: {
    backgroundColor: "#a1bfe2",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    borderRadius: Border.br_31xl,
  },
});

export default CreateAccount;
