import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    height: 50,
    gap: 10,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 48,
    marginLeft: -8,
    fontSize: 14,
  },
});
