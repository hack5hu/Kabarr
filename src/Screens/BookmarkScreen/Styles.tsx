import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    marginHorizontal: 16,
    // marginVertical:16,
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#4E4B66',
  },
  categoryList: {
    // marginVertical: 10,
  },
  item: {
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedItem: {
    borderBottomColor: '#1877F2',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
    height: 24,
  },
  selectedTitle: {
    color: 'black',
  },
  newsList: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 56,
    marginBottom: 16,
    backgroundColor: '#fff',
    elevation: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  logo: {
    width: 99,
    height: 30,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000',
    marginLeft: 110,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
