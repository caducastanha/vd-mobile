import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const {width} = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = width / numberGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    marginTop: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 30,
    color: '#FA9169',
  },

  description: {
    color: '#EA1F59',
    marginTop: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 25,
    textTransform: 'lowercase'
  },

  viewImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatList: {
    marginTop: 30,
  },

  item: {
    margin: 0,
    // backgroundColor: "#dcda48",
    flexGrow: 1,
    flexBasis: 0,
    borderRadius: 10
  },
  text: {
    color: "#333333",
  },
  
  itemEmpty: {
    backgroundColor: "transparent"
  },

  itemImage: {
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 3
  }
})

export default styles;