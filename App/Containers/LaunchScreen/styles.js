import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCard: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  uploadPhotoCard: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  historyButton: {
    color: 'red',
  },
})
