import { StyleSheet, View, Text, Pressable } from "react-native";

function SaveCancelButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={props.saveNameChange}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Update</Text>
        </View>
      </Pressable>
      <Pressable onPress={props.onCancel}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Cancel</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SaveCancelButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  button: {
    padding: "5%",
    width: "90%",
  },
  btnContainer: {
    width: 300,
    height: 50,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 2,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
