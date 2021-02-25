import * as React from "react";
import {
  Button,
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("screen");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: "1",
      items: [
        { key: "1", image: require("../../../../assets/icon_one.png") },
        { key: "2", image: require("../../../../assets/icon_two.png") },
        { key: "3", image: require("../../../../assets/icon_three.png") },
        { key: "4", image: require("../../../../assets/icon_four.png") },
        { key: "5", image: require("../../../../assets/icon_five.png") },
        { key: "6", image: require("../../../../assets/icon_six.png") },
        { key: "7", image: require("../../../../assets/icon_seven.png") },
        { key: "8", image: require("../../../../assets/icon_eight.png") },
      ],
    };
    this.sheetRef = React.createRef();
    this.sheetTwoRef = React.createRef();
  }

  renderLeaguesListContent = () => (
    <BlurView
      intensity={100}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 16,
        height: 650,
        borderTopColor: "gray",
        borderWidth: 0.3,
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 6.17,
        elevation: 7,
      }}
    >
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{ paddingTop: 15 }}
        data={this.state.items}
        numColumns={4}
        extraData={this.state}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => this.setState({ league: item.key })}
          >
            <View
              style={[
                styles.item,
                {
                  backgroundColor:
                    item.key == this.state.league ? "#00bb6c" : "white",
                },
              ]}
            >
              <Image
                style={{ resizeMode: "contain", width: 26, height: 26 }}
                source={item.image}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </BlurView>
  );

  renderLeaguesContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 650,
        borderTopColor: "gray",
        borderWidth: 0.3,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 6.17,
        elevation: 7,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          paddingHorizontal: 15,
          paddingVertical: 25,
        }}
      >
        Premier League
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "45%" }}>
          <Image
            style={{
              resizeMode: "contain",
              width: "50%",
              height: "35%",
              alignSelf: "center",
            }}
            source={require("../../../..//assets/bournemouth.png")}
          />
          <View
            style={{
              backgroundColor: "#00bb6c",
              flexDirection: "column",
              padding: 20,
              marginTop: 15,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                alignItems: "baseline",
                position: "absolute",
                alignSelf: "center",
                top: -5,
              }}
            >
              <View
                style={{
                  backgroundColor: "green",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 5,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
                >
                  No. 10
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                justifyContent: "space-between",
                paddingVertical: 15,
              }}
            >
              <View>
                <Text style={[styles.matchscore, { fontSize: 18 }]}>3</Text>
                <Text style={styles.matchscore}>Win</Text>
              </View>
              <View>
                <Text style={[styles.matchscore, { fontSize: 18 }]}>3</Text>
                <Text style={styles.matchscore}>Draw</Text>
              </View>
              <View>
                <Text style={[styles.matchscore, { fontSize: 18 }]}>3</Text>
                <Text style={styles.matchscore}>Lose</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={{ fontWeight: "500", fontSize: 16 }}>Bournemouth</Text>
          <Text style={{ fontWeight: "500", fontSize: 12, color: "gray" }}>
            Premier league 2019-2020
          </Text>
          <View style={{paddingVertical: 50, justifyContent:'space-between', flex: 1,paddingHorizontal: 5}}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>7.9</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>Shoot</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Progress.Bar progress={0.3} borderWidth={0} color={"#00bb6c"} />
              <View style={{ paddingVertical: 5 }} />
              <Progress.Bar
                borderWidth={0}
                progress={0.6}
                borderColor={"#e2e2e2"}
                color={"#e2e2e2"}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>373.7</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>Passing</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Progress.Bar progress={0.3} borderWidth={0} color={"#00bb6c"} />
              <View style={{ paddingVertical: 5 }} />
              <Progress.Bar
                borderWidth={0}
                progress={0.6}
                borderColor={"#e2e2e2"}
                color={"#e2e2e2"}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>43.0%</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>Possession</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Progress.Bar progress={0.3} borderWidth={0} color={"#00bb6c"} />
              <View style={{ paddingVertical: 5 }} />
              <Progress.Bar
                borderWidth={0}
                progress={0.6}
                borderColor={"#e2e2e2"}
                color={"#e2e2e2"}
              />
            </View>
          </View>
          </View>
        </View>
      </View>
    </View>
  );

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this._onPress(item)}>
      <View
        style={[
          styles.item,
          {
            backgroundColor:
              item.key == this.state.league ? "#00bb6c" : "white",
          },
        ]}
      >
        <Image
          style={{ resizeMode: "contain", width: 25, height: 25 }}
          source={item.image}
        />
        <Text>
          {this.state.league}- {item.key}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <ImageBackground
          source={require("../../../../../app/assets/stadium.jpeg")}
          style={{ resizeMode: "cover", width: width, height: width }}
        >
          <View style={styles.blackOpacity} />
          <View style={styles.sliderItem}>
            <View style={styles.sliderMenu}>
              <Ionicons name={"search"} size={25} style={{ color: "white" }} />
              <View style={styles.calendar}>
                <View style={styles.dateContainer}>
                  <Text style={styles.date}>06</Text>
                </View>
                <Text style={styles.month}>Oct</Text>
              </View>
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderTitle}>Uefa Champions</Text>
              <View style={styles.liveContainer}>
                <Text style={styles.live}>LIVE</Text>
              </View>
            </View>
            <Text style={[styles.sliderTitle, styles.sliderTitleCategory]}>
              Group H-2
            </Text>
            <View style={styles.matchContainer}>
              <View style={styles.clubContainer}>
                <Image
                  source={require("../../../../../app/assets/chelsea.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.clubName}>Chelsea</Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.score}> 2 : 1 </Text>
              </View>
              <View style={styles.clubContainer}>
                <Image
                  source={require("../../../../../app/assets/lille.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.clubName}>Lille</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <BottomSheet
          ref={this.sheetTwoRef}
          snapPoints={["80%", 650, "67%"]}
          borderRadius={10}
          renderContent={this.renderLeaguesListContent}
        />
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={["55%", 650, 730]}
          borderRadius={10}
          renderContent={this.renderLeaguesContent}
        />
      </View>
    );
  }

  _onPress() {
    // your code on item press
    console.log("y");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 18,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  sliderItem: {
    flex: 1,
    marginVertical: 60,
    alignContent: "center",
    marginHorizontal: 25,
  },
  sliderContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  live: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  liveContainer: {
    backgroundColor: "#ffb220",
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 15,
    borderRadius: 150,
  },
  sliderTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  sliderTitleCategory: {
    fontWeight: "500",
  },
  blackOpacity: {
    ...StyleSheet.absoluteFill,
    opacity: 0.5,
    backgroundColor: "black",
  },
  sliderMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
    alignContent: "center",
    alignItems: "center",
  },
  calendar: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 5,
  },
  dateContainer: {
    backgroundColor: "#00bb6c",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  date: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  month: {
    textAlign: "center",
    color: "#00bb6c",
    fontWeight: "bold",
    fontSize: 10,
  },
  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    width: "60%",
  },
  clubContainer: {
    flexDirection: "column",
  },
  clubName: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  scoreContainer: {
    justifyContent: "center",
  },
  score: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  matchscore: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
  },
});
