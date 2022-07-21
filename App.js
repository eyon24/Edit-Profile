import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Modal, Image } from "react-native";

import EditButton from "./components/EditButton";
import CustomModal from "./components/CustomModal";

export default function App() {
  // const [section, setSection] = useState("name");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [action, setAction] = useState("");

  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const onUpdate = (enteredText) => {
    switch (action) {
      case "name":
        setName(enteredText);
        break;
      case "phone number":
        setPhone(enteredText);
        break;
      case "email":
        setEmail(enteredText);
        break;
      case "story":
        setStory(enteredText);
        break;
    }
    toggleModal();
  };

  const onEdit = (action) => {
    setAction(action);
    toggleModal();
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("./assets/my-icon.jpg")} />
      </View>
      <View style={styles.btnContainer}>
        <EditButton onEdit={onEdit} display={name} action="name" title="Name" />
        <EditButton
          onEdit={onEdit}
          display={phone}
          action="phone number"
          title="Phone Number"
        />
        <EditButton
          onEdit={onEdit}
          display={email}
          action="email"
          title="Email"
        />
        <EditButton
          onEdit={onEdit}
          display={story}
          action="story"
          title="Tell us about yourself"
        />
        <CustomModal
          visible={modalIsVisible}
          onUpdate={onUpdate}
          onCancel={toggleModal}
          action={action}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    margin: 25,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  img: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  btnContainer: {
    width: "100%",
    flex: 3,
  },
});
