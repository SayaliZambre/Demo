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
  Dimensions,
} from "react-native";

function ProjectMain() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e490ac2c4523655630e94f97e2f2195a0cab7fea10e3b122c7e0cb1b2d60602?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
          }}
          style={styles.logo}
        />
        <View style={styles.searchBar}>
          <Text>Search your domain, URL, or keyword...</Text>
        </View>
      </View>
      <View style={styles.results}>
        <View style={styles.resultHeader}>
          <Text>Your results for cbb.coastalbroadband.in</Text>
        </View>
        <View style={styles.scoreSection}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a9c26deb77c1abe5f30ef0ce0aee806265c914932c355f69ea5da780c0c9bae?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
            }}
            style={styles.scoreCircle}
          >
            <Text style={styles.scoreText}>76</Text>
          </Image>
          <Text style={styles.overallScoreText}>Overall Score</Text>
        </View>
        <View style={styles.detailSection}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9cd9bfbdca942ba75cb9572decc2645260b5382beecc5e09ccb892a50ed215b?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
            }}
            style={styles.detailImage}
          />
          <View style={styles.detailInfo}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c74bd91ecce3397bdc397e18fd57be039432286a9ba148f554533ef537ad13f3?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
              }}
              style={styles.icon}
            />
            <View style={styles.urlInfo}>
              <Text style={styles.urlText}>
                https://cbb.coastalbroadband.in
              </Text>
              <Text style={styles.dateText}>August 25 16:00:34</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.metrics}>
            <View style={styles.metric}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
                }}
                style={styles.metricIcon}
              />
              <Text>Performance</Text>
            </View>
            <View style={styles.metric}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae",
                }}
                style={styles.metricIcon}
              />
              <Text>SEO</Text>
            </View>
            <View style={styles.metric}>
              <View style={[styles.metricCircle, { backgroundColor: "#CB4BF8" }]} />
              <Text>Mobile</Text>
            </View>
            <View style={styles.metric}>
              <View style={[styles.metricCircle, { backgroundColor: "#F89E4B" }]} />
              <Text>Security</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.downloadButton}>
              <Text style={styles.buttonText}>Download PDF</Text>
            </Pressable>
            <Pressable style={styles.shareButton}>
              <Text style={styles.buttonText}>Share</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
    padding: 10,
  },
  results: {
    marginTop: 20,
  },
  resultHeader: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  scoreSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  scoreText: {
    fontSize: 36,
    fontWeight: "700",
  },
  overallScoreText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  detailSection: {
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  detailImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  detailInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  urlInfo: {
    flex: 1,
  },
  urlText: {
    fontSize: 16,
    fontWeight: "600",
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  metrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  metric: {
    alignItems: "center",
  },
  metricIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  metricCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  downloadButton: {
    backgroundColor: "#007BFE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shareButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProjectMain;
