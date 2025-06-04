import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 6,
    height: 112,
  },
  imageContainer: {
    flex: 0.3,
  },
  image: {
    borderRadius: 6,
    height: 96,
    width: 96,
  },
  textContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  category: {
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 10,
  },
  title: {
    width: '85%',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.12,
    color: '#28282B',
  },
  description: {
    width: '85%',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#28282B',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: '95%',
    paddingTop: 5,
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  source: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    marginRight: 5,
    color: '#4E4B66',
  },
  time: {
    height: 20,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    paddingLeft: 5,
    color: '#4E4B66',
  },
  more: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  titleAndDescription: {flexDirection: 'column', width: '85%'},
});
