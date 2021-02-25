import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");

const TabIcon = (focused, title) => {
  if (title === "Home") {
    const iconName = `football-outline`;
    return (
      <Ionicons
        name={iconName}
        size={25}
        style={{ color: focused ? "white" : "black" }}
      />
    );
  } else if (title === "Leagues") {
    const iconName = `trophy-outline`;
    return (
      <Ionicons
        name={iconName}
        size={25}
        style={{ color: focused ? "white" : "black" }}
      />
    );
  } else if (title === "Search") {
    const iconName = `search`;
    return (
      <Ionicons
        name={iconName}
        size={25}
        style={{ color: focused ? "white" : "black" }}
      />
    );
  }
};

export default function ({ state, descriptors, navigation }) {
  const slideLeft = useRef([]);

  const focusedOptions = descriptors[state.routes[state.index].key].options;




  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = (index) => {
            slideLeft.current[index].slideInLeft(900);
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
            key={index}
              style={[styles.tabMenu]}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onPress(index)}
              onLongPress={onLongPress}
            >
              <Animatable.View
                easing="ease-out-back"
                ref={(ref) => slideLeft.current.push(ref)}
                style={[
                  styles.tabMenu,
                  { backgroundColor: isFocused ? "#00bb6c" : "white" },
                ]}
              >
                {TabIcon(isFocused, label)}
                {isFocused ? (
                  <Text
                    style={{
                      color: isFocused ? "white" : "black",
                      paddingLeft: 5,
                    }}
                  >
                    {label}
                  </Text>
                ) : null}
              </Animatable.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 40,
    width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  wrapper: {
    flexDirection: "row",
    width,
    height: 57,
    borderRadius: 100,
  },
  tabMenu: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    alignSelf: "center",
    borderRadius: 100,
  },
});
