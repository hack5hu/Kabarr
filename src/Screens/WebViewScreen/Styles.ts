import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.5,
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    marginLeft: 70,
  },
  closeButton: {
    marginLeft: 40,
  },
  webview: {
    flex: 1,
  },
});
