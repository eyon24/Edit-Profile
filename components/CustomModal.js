import { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  Pressable,
} from "react-native";

function CustomModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const placeText =
    "Write a little bit about yourself. Do you like chatting? are you a smoker? Etc.";

  const firstNameInputHandler = (firstName) => {
    setFirstName(firstName);
  };

  const lastNameInputHandler = (lastName) => {
    setLastName(lastName);
  };

  const phoneInputHandler = (phone) => {
    setPhone(phone);
  };

  const emailInputHandler = (email) => {
    setEmail(email);
  };

  const storyInputHandler = (story) => {
    setStory(story);
  };

  const onUpdate = () => {
    switch (props.action) {
      case "name":
        props.onUpdate(() => {
          return firstName + " " + lastName;
        });
        break;
      case "phone number":
        props.onUpdate(phone);
        break;
      case "email":
        props.onUpdate(email);
        break;
      case "story":
        props.onUpdate(story);
        break;
    }
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      {/* container */}
      <View style={styles.container}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What is your {props.action}?</Text>
        </View>
        {/* conditional actions */}
        {props.action === "name" ? (
          <View style={styles.inputContainer}>
            <View style={styles.editInputContainer}>
              <Text style={styles.fieldTitle}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={firstNameInputHandler}
              />
            </View>
            <View style={styles.editInputContainer}>
              <Text style={styles.fieldTitle}>Last Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={lastNameInputHandler}
                value={lastName}
              />
            </View>
          </View>
        ) : props.action === "phone number" ? (
          <View style={styles.inputContainer2}>
            <View style={styles.phoneInputContainer}>
              <Text style={styles.fieldTitle}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={phoneInputHandler}
              />
            </View>
          </View>
        ) : props.action === "email" ? (
          <View style={styles.inputContainer2}>
            <View style={styles.emailInputContainer}>
              <Text style={styles.fieldTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={emailInputHandler}
              />
            </View>
          </View>
        ) : props.action === "story" ? (
          <View style={styles.storyContainer}>
            <View style={styles.storyInputContainer}>
              <Text style={styles.fieldTitle}>Story</Text>
              <TextInput
                style={styles.story}
                multiline={true}
                value={story}
                onChangeText={storyInputHandler}
                placeholder={placeText}
              />
            </View>
          </View>
        ) : null}
        {/* buttons */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={onUpdate}>
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
      </View>
    </Modal>
  );
}

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    marginLeft: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editInputContainer: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  fieldTitle: {
    opacity: 0.5,
    fontSize: 14,
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  phoneInputContainer: {
    width: "50%",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  emailInputContainer: {
    width: "75%",
    margin: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonContainer: {
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
  storyContainer: {
    width: "100%",
    height: 200,
    marginBottom: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  storyInputContainer: {
    width: "80%",
    height: "80%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  story: {
    height: "85%",
    textAlignVertical: "top",
    fontSize: 16,
    fontWeight: "bold",
  },
});
