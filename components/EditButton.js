import { StyleSheet, Pressable, View, Text } from "react-native";

function EditButton(props) {
  const onPress = () => {
    props.onEdit(props.action);
  };

  return (
    <View style={styles.pressableContainer}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Text style={styles.pressableText}>{props.display}</Text>
        <Text style={styles.sectionText}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default EditButton;

const styles = StyleSheet.create({
  pressableContainer: {
    padding: 25,
  },
  pressable: {
    marginTop: 15,
  },
  pressableText: {
    paddingLeft: 7,
    fontSize: 16,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  sectionText: {
    paddingLeft: 10,
    opacity: 0.5,
    fontSize: 14,
  },
  pressedButton: {
    opacity: 0.5,
  },
});
