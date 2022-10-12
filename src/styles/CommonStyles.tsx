import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  // Round Button
  btn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#C5B4E3',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnText: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  // Calculator
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 65,
    color: '#7600bc',
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: '#000000',
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
});
