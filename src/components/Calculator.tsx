import React from 'react';
import {View, Text} from 'react-native';
import RoundButton from './RoundButton';
import {Styles} from '../styles/CommonStyles';

const Calculator = () => {
  const [firstField, setFirstField] = React.useState('');
  const [secondField, setSecondField] = React.useState('');
  const [operation, setOperation] = React.useState('');

  const handleDigit = (buttonValue: string) => {
    firstField.length < 10 && setFirstField(firstField + buttonValue);
  };

  const handleOperation = (buttonValue: string) => {
    setOperation(buttonValue);
    if (firstField.trim().length !== 0) {
      setSecondField(firstField);
      setFirstField('');
    }
  };

  const clearAll = () => {
    setFirstField('');
    setSecondField('');
    setOperation('');
  };

  const getResult = () => {
    if (!!firstField.trim().length) {
      switch (operation) {
        case '+':
          clearAll();
          setFirstField(
            (parseInt(secondField) + parseInt(firstField)).toString(),
          );
          break;
        case '-':
          clearAll();
          setFirstField(
            (parseInt(secondField) - parseInt(firstField)).toString(),
          );
          break;
        case '×':
          clearAll();
          setFirstField(
            (parseInt(secondField) * parseInt(firstField)).toString(),
          );
          break;
        case '/':
          clearAll();
          setFirstField(
            (parseInt(secondField) / parseInt(firstField)).toString(),
          );
          break;
        default:
          clearAll();
          setFirstField(firstField);
          break;
      }
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <Text style={Styles.screenSecondNumber}>
          {secondField}
          <Text style={{fontSize: 50, fontWeight: '500'}}>{operation}</Text>
        </Text>
        <Text
          style={[
            Styles.screenFirstNumber,
            firstField.length > 10 && {fontSize: 35},
          ]}>
          {firstField || 0}
        </Text>
      </View>
      <View style={Styles.row}>
        <RoundButton title="C/A" onPress={clearAll} />
      </View>
      <View style={Styles.row}>
        <RoundButton title="1" onPress={() => handleDigit('1')} />
        <RoundButton title="2" onPress={() => handleDigit('2')} />
        <RoundButton title="3" onPress={() => handleDigit('3')} />
        <RoundButton title="/" onPress={() => handleOperation('/')} />
      </View>
      <View style={Styles.row}>
        <RoundButton title="4" onPress={() => handleDigit('4')} />
        <RoundButton title="5" onPress={() => handleDigit('5')} />
        <RoundButton title="6" onPress={() => handleDigit('6')} />
        <RoundButton title="×" onPress={() => handleOperation('×')} />
      </View>
      <View style={Styles.row}>
        <RoundButton title="7" onPress={() => handleDigit('7')} />
        <RoundButton title="8" onPress={() => handleDigit('8')} />
        <RoundButton title="9" onPress={() => handleDigit('9')} />
        <RoundButton title="-" onPress={() => handleOperation('-')} />
      </View>
      <View style={Styles.row}>
        <RoundButton title="=" onPress={() => getResult()} />
        <RoundButton title="0" onPress={() => handleDigit('0')} />
        <RoundButton
          title="C"
          onPress={() => setFirstField(firstField.slice(0, -1))}
        />
        <RoundButton title="+" onPress={() => handleOperation('+')} />
      </View>
    </View>
  );
};

export default Calculator;
