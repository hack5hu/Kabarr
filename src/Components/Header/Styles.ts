import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    width: 120,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
