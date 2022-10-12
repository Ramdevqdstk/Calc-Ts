import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';
import {Styles} from '../styles/CommonStyles';

interface RoundButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const RoundButton = ({title, onPress}: RoundButtonProps) => {
  return (
    <TouchableOpacity style={Styles.btn} onPress={onPress}>
      <Text style={Styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
