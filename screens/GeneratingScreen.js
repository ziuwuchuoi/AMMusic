import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import scale from '../scr/constants/responsive';
import {IMG_MUSICGENERATE} from '../scr/assets/images';
import { useNavigation } from '@react-navigation/native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.count,
    };
  }
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase = () => {
    const {time} = this.state;
    const {onIncrease} = this.props;
    const newTime = time + 1;
    onIncrease(newTime);
    this.setState({time: newTime});
  };

  render(){
    return(
      <Text style={{color: 'white'}}> {this.state.time} </Text>
    );
  }
}

export const GeneratingScreen = ({props}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image source={IMG_MUSICGENERATE}></Image>
        <Text style={styles.text}>. . . G e n e r a t i n g . . .</Text>
        <Timer
          count={0}
          onIncrease={count => {
            if (count === 5) {
              navigation.navigate('Export');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  img: {
    marginTop: scale(200, 'h'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: scale(40, 'h'),
    fontSize: scale(25, 'h'),
    fontWeight: '400',
    color: 'black',
  },
});

export default GeneratingScreen;
