import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  viewImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Image: {
    width: 250,
    height: 50,
    right: 30,
    marginTop: 80,
    resizeMode: 'contain'
  },

  description: {
    color: '#EA1F59',
    marginTop: 80,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 25,
  },

  viewButton: {
    top: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#EA1F59',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4,
    borderRadius: 3,
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    textTransform: 'uppercase',
  }
})

export default styles;