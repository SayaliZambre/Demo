import * as React from "react";
import {
FlatList,
ScrollView,
View,
StyleSheet,
Image,
Text,
Pressable,
TextInput,
} from "react-native";

function ProjectMain() {
return (
  <View style={styles.view1}>
    <View style={styles.view2}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e490ac2c4523655630e94f97e2f2195a0cab7fea10e3b122c7e0cb1b2d60602?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
        }}
        style={styles.image1}
      />
      <View style={styles.view3}>
        <Text>Search your domain,url or keyword..</Text>
      </View>
    </View>
    <View style={styles.view4}>
      <View style={styles.view5}>
        <Text>Your results for cbb.coastalbroadband.in </Text>
      </View>
      <Image
        resizeMode="cover"
        fitContent
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a9c26deb77c1abe5f30ef0ce0aee806265c914932c355f69ea5da780c0c9bae?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
        }}
        style={styles.image2}
      >
        <Image
          resizeMode="cover"
          fitContent
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/09835bc333492c9744e04821ed02896f7e88ed3f8730a61f090c12d2f4db570b?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
          }}
          style={styles.image3}
        >
          <Text>76</Text>
        </Image>
      </Image>
      <View style={styles.view6}>
        <Text>Overall Score</Text>
      </View>
      <View style={styles.view7}>
        <Image
          resizeMode="cover"
          fitContent
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9cd9bfbdca942ba75cb9572decc2645260b5382beecc5e09ccb892a50ed215b?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
          }}
          style={styles.image4}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7313a6ba7a83d9377f496ab6e058d79d39b86e28f85f13a5235f37b40d5c9b5a?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
            }}
            style={styles.image5}
          />
        </Image>
        <View style={styles.view8}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c74bd91ecce3397bdc397e18fd57be039432286a9ba148f554533ef537ad13f3?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
            }}
            style={styles.image6}
          />
          <View style={styles.view9}>
            <View style={styles.view10}>
              <Text>https://cbb.coastalbroadband.in</Text>
            </View>
            <View style={styles.view11}>
              <Text>August 25 16:00:34</Text>
            </View>
          </View>
        </View>
        <View style={styles.view12} />
        <div style={styles.div1}>
          <div style={styles.div2}>
            <div style={styles.div3}>
              <View style={styles.view13}>
                <View style={styles.view14}>
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
                    }}
                    style={styles.image7}
                  />
                  <View style={styles.view15}>
                    <Text>Performance</Text>
                  </View>
                </View>
                <View style={styles.view16}>
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
                    }}
                    style={styles.image8}
                  />
                  <View style={styles.view17}>
                    <Text>SEO</Text>
                  </View>
                </View>
                <View style={styles.view18}>
                  <View style={styles.view19} />
                  <View style={styles.view20}>
                    <Text>Mobile</Text>
                  </View>
                </View>
                <View style={styles.view21}>
                  <View style={styles.view22} />
                  <View style={styles.view23}>
                    <Text>Security</Text>
                  </View>
                </View>
              </View>
            </div>
            <div style={styles.div4}>
              <View style={styles.view24}>
                <View style={styles.view25}>
                  <View style={styles.view26} />
                </View>
                <View style={styles.view27}>
                  <View style={styles.view28} />
                </View>
                <View style={styles.view29} />
                <View style={styles.view30}>
                  <View style={styles.view31} />
                </View>
              </View>
            </div>
          </div>
        </div>
        <View style={styles.view32}>
          <Text>Download PDF</Text>
        </View>
        <View style={styles.view33}>
          <Text>Share</Text>
        </View>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
view1: {
  borderRadius: "0px 0px 0px 0px",
  display: "flex",
  flexDirection: "column",
},
view2: {
  borderRadius: 12,
  backgroundColor: "rgba(229, 229, 229, 1)",
  alignSelf: "start",
  display: "flex",
  alignItems: "stretch",
  gap: 18,
  color: "rgba(0, 0, 0, 1)",
  flexWrap: "wrap",
  padding: "14px 36px",
  font: "600 18px Lato, sans-serif ",
},
image1: {
  position: "relative",
  display: "flex",
  width: 24,
  flexShrink: 0,
  aspectRatio: "1",
},
view3: { flexBasis: "auto", flexGrow: "1", flexShrink: "1" },
view4: {
  alignSelf: "end",
  display: "flex",
  marginTop: 96,
  width: "100%",
  maxWidth: 848,
  flexDirection: "column",
  alignItems: "stretch",
},
view5: {
  color: "rgba(0, 0, 0, 1)",
  alignSelf: "start",
  font: "600 36px Lato, sans-serif ",
},
image2: {
  borderRadius: "50%",
  alignSelf: "center",
  position: "relative",
  display: "flex",
  aspectRatio: "1.12",
  marginTop: 89,
  width: 262,
  maxWidth: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  color: "rgba(0, 0, 0, 1)",
  whiteSpace: "nowrap",
  justifyContent: "center",
  padding: "1px 2px",
  font: "700 72px Lato, sans-serif ",
},
image3: {
  position: "relative",
  borderRadius: "50%",
  aspectRatio: "1.12",
  padding: "90px 70px",
},
view6: {
  color: "rgba(0, 0, 0, 1)",
  textAlign: "center",
  alignSelf: "center",
  marginTop: 21,
  font: "700 32px Lato, sans-serif ",
},
view7: {
  borderRadius: 15,
  backgroundColor: "rgba(255, 255, 255, 1)",
  boxShadow: "0px 2px 2px rgba(16, 24, 40, 0.1)",
  display: "flex",
  marginTop: 77,
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  padding: "48px 80px",
  border: "1px solid rgba(224, 226, 231, 1)",
},
image4: {
  position: "relative",
  display: "flex",
  aspectRatio: "1.78",
  width: 385,
  maxWidth: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  padding: "3px 45px 24px",
},
image5: {
  backgroundBlendMode: "normal",
  position: "relative",
  display: "flex",
  aspectRatio: "1.56",
},
view8: {
  display: "flex",
  marginTop: 36,
  width: 369,
  maxWidth: "100%",
  alignItems: "stretch",
  gap: 21,
  fontFamily: "Lato, sans-serif",
  color: "rgba(0, 0, 0, 1)",
  fontWeight: "600",
},
image6: {
  position: "relative",
  display: "flex",
  width: 14,
  flexShrink: 0,
  margin: "auto 0",
  aspectRatio: "1",
},
view9: {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  flexGrow: "1",
  flexShrink: 0,
  flexBasis: 0,
  width: "fit-content",
},
view10: { fontSize: 24 },
view11: { fontSize: 18, alignSelf: "center", marginTop: 18 },
view12: {
  alignSelf: "end",
  marginTop: 31,
  width: 665,
  flexShrink: 0,
  maxWidth: "100%",
  height: 1,
  border: "1px solid rgba(0, 0, 0, 1)",
},
div1: { marginTop: 48, width: 475, maxWidth: "100%" },
div2: { gap: 20, display: "flex" },
div3: {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "37%",
},
view13: {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "start",
  color: "rgba(0, 0, 0, 1)",
  whiteSpace: "nowrap",
  font: "600 18px Lato, sans-serif ",
},
view14: {
  alignSelf: "stretch",
  display: "flex",
  alignItems: "stretch",
  gap: 19,
},
image7: {
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  width: 37,
  flexShrink: 0,
  aspectRatio: "1",
},
view15: { flexGrow: "1", flexShrink: "1", width: 93, margin: "auto 0" },
view16: { display: "flex", marginTop: 27, alignItems: "stretch", gap: 19 },
image8: {
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  width: 37,
  flexShrink: 0,
  aspectRatio: "1",
},
view17: { margin: "auto 0" },
view18: { display: "flex", marginTop: 27, alignItems: "stretch", gap: 19 },
view19: {
  backgroundColor: "rgba(203, 75, 248, 1)",
  borderRadius: "50%",
  display: "flex",
  width: 37,
  flexShrink: 0,
  height: 37,
},
view20: { margin: "auto 0" },
view21: { display: "flex", marginTop: 27, alignItems: "stretch", gap: 19 },
view22: {
  backgroundColor: "rgba(248, 158, 75, 1)",
  borderRadius: "50%",
  display: "flex",
  width: 37,
  flexShrink: 0,
  height: 37,
},
view23: { margin: "auto 0" },
div4: {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "63%",
  marginLeft: 20,
},
view24: {
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  alignItems: "stretch",
  margin: "auto 0",
},
view25: {
  borderRadius: 21,
  backgroundColor: "rgba(217, 217, 217, 1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
},
view26: {
  borderRadius: 21,
  backgroundColor: "rgba(248, 75, 76, 1)",
  display: "flex",
  width: 134,
  flexShrink: 0,
  height: 21,
},
view27: {
  borderRadius: 21,
  backgroundColor: "rgba(217, 217, 217, 1)",
  display: "flex",
  marginTop: 43,
  flexDirection: "column",
  alignItems: "start",
},
view28: {
  borderRadius: 21,
  backgroundColor: "rgba(3, 189, 165, 1)",
  display: "flex",
  flexShrink: 0,
  height: 21,
},
view29: {
  borderRadius: 21,
  backgroundColor: "rgba(203, 75, 248, 1)",
  display: "flex",
  marginTop: 43,
  flexShrink: 0,
  height: 21,
},
view30: {
  borderRadius: 21,
  backgroundColor: "rgba(217, 217, 217, 1)",
  display: "flex",
  marginTop: 43,
  flexDirection: "column",
  alignItems: "start",
},
view31: {
  borderRadius: 21,
  backgroundColor: "rgba(248, 158, 75, 1)",
  display: "flex",
  width: 102,
  flexShrink: 0,
  height: 21,
},
view32: {
  borderRadius: 12,
  backgroundColor: "rgba(0, 123, 254, 1)",
  marginTop: 48,
  width: 232,
  maxWidth: "100%",
  color: "rgba(255, 255, 255, 1)",
  textAlign: "center",
  padding: "16px 62px",
  font: "600 16px Lato, sans-serif ",
},
view33: {
  borderRadius: 12,
  backgroundColor: "rgba(255, 255, 255, 1)",
  marginTop: 24,
  width: 232,
  maxWidth: "100%",
  color: "rgba(0, 0, 0, 1)",
  whiteSpace: "nowrap",
  textAlign: "center",
  padding: "16px 70px",
  font: "600 16px Lato, sans-serif ",
  border: "1px solid rgba(0, 0, 0, 0.2)",
},
});