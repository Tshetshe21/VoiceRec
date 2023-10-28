import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LaunchYourApp = () => {
  return (
    <View style={styles.launchYourApp}>
      <Text style={[styles.launchYourApp1, styles.launchYourApp1FlexBox]}>
        Launch Your App
      </Text>
      <Image
        style={styles.nounRocket35257791Icon}
        resizeMode="cover"
        source={require("../assets/nounrocket3525779-1.png")}
      />
      <View style={styles.createAccount}>
        <Text style={[styles.createAccount1, styles.createTypo]}>
          CREATE ACCOUNT
        </Text>
      </View>
      <View style={styles.property1defaultParent}>
        <View style={[styles.property1default, styles.property1defaultLayout]}>
          <View style={[styles.property1defaultChild, styles.childPosition]} />
          <View style={styles.property1defaultInner}>
            <View style={styles.createAccountWrapper}>
              <Text style={styles.createTypo}>CREATE ACCOUNT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.property1variant2, styles.property1defaultLayout]}>
          <View style={[styles.property1variant2Child, styles.childPosition]} />
          <Text style={[styles.signIn, styles.createTypo]}>SIGN IN</Text>
        </View>
      </View>
      <Text
        style={[styles.termsConditions, styles.launchYourApp1FlexBox]}
      >{`Terms & Conditions`}</Text>
      <Image
        style={[styles.launchYourAppChild, styles.launchLayout]}
        resizeMode="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.launchYourAppItem, styles.launchLayout]}
        resizeMode="cover"
        source={require("../assets/star-3.png")}
      />
      <Image
        style={[styles.launchYourAppInner, styles.launchLayout]}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  launchYourApp1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  createTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  property1defaultLayout: {
    height: 65,
    width: 296,
    left: 20,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
  launchLayout: {
    height: 31,
    width: 29,
    position: "absolute",
  },
  launchYourApp1: {
    top: 55,
    left: 80,
    fontSize: 32,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: "#8b8383",
  },
  nounRocket35257791Icon: {
    top: 178,
    left: 84,
    width: 273,
    height: 368,
    position: "absolute",
    overflow: "hidden",
  },
  createAccount1: {
    left: "0%",
    top: "0%",
    height: "100%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
    width: "100%",
  },
  createAccount: {
    top: 562,
    left: 103,
    width: 210,
    height: 30,
    position: "absolute",
  },
  property1defaultChild: {
    backgroundColor: "#5ea0c6",
  },
  createAccountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  property1defaultInner: {
    top: 1,
    left: 34,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  property1default: {
    top: 11,
  },
  property1variant2Child: {
    backgroundColor: "#d48425",
  },
  signIn: {
    top: "32.31%",
    left: "37.5%",
    position: "absolute",
  },
  property1variant2: {
    top: 105,
  },
  property1defaultParent: {
    top: 556,
    left: 48,
    borderRadius: 5,
    width: 336,
    height: 190,
    position: "absolute",
    overflow: "hidden",
  },
  termsConditions: {
    top: 788,
    left: 133,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "rgba(139, 131, 131, 0.62)",
  },
  launchYourAppChild: {
    left: 71,
    top: 147,
    width: 29,
  },
  launchYourAppItem: {
    left: 365,
    top: 147,
    width: 29,
  },
  launchYourAppInner: {
    top: 289,
    left: 40,
  },
  launchYourApp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_31xl,
  },
});

export default LaunchYourApp;
