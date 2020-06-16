import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  viewQuestion: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 25,
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4,
    marginBottom: 20,
  },

  viewImage: {
    top: 0,
    flexDirection: 'row',
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewQuestionText: {
    top: 0,
    flexDirection: 'row',
    width: '70%',
    height: 80,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
  },

  questionText: {
    textAlign: "center",
  },

  button: {
    width: 300,
    height: 45,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },

  selected: {
    backgroundColor: '#FCE0DD',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4,
  },

  buttonText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  buttonTextSelected: {
    fontWeight: 'bold',
  },

  viewButton: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSubmit: {
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

  buttonSubmitText: {
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