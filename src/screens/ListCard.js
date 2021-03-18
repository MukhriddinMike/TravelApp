import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class ListCard extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress} style={styles.touchOp}>
          <View style={styles.cardView}>
            <Text style={styles.cardText}> INCH</Text>
            <Text style={styles.cardTire}>----------- </Text>
            <Text style={styles.cardText}> TAS </Text>
          </View>
          <View style={styles.cardViewSub}>
            <Text style={styles.cardTextSub}>Seoul,KR</Text>
            <Text style={styles.cardTextSub}> Tashkent,UZ</Text>
          </View>
          <View style={styles.cardViewSub2}>
            <Text style={styles.cardTextSub2}>15:30 PM </Text>
            <Text style={styles.cardTextSub2}>23:00 PM </Text>
          </View>
          <Text style={styles.cardViewSub2Date}>28March, 2021</Text>
          <Text style={styles.cardTire}>--------------------------------</Text>
          <View style={styles.cardViewSub}>
            <Text style={styles.cardText}>Overall: </Text>
            <Text style={styles.cardText}>$499</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchOp: {
    paddingHorizontal: 32,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#FFF',
    height: 182,
    elevation: 1,
    width: 270,
    borderRadius: 15,
  },
  cardView: {
    flexDirection: 'row',
    paddingTop: 20,
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 20,
    fontFamily: 'RobotoBold',
    color: '#4b3ca7',
  },
  cardTire: {
    fontSize: 22,
    color: '#a2a2db',
    marginLeft: 10,
    //paddingHorizontal: 14,
  },
  cardViewSub: {
    flexDirection: 'row',
    marginTop: -5,
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
  },
  cardTextSub: {
    fontFamily: 'RobotoBold',
    color: '#4b3ca7',
    fontSize: 11,
  },
  cardTextSub2: {
    fontFamily: 'RobotoBold',
    color: '#4b3ca7',
    fontSize: 16,
  },
  cardViewSub2: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
  },
  cardViewSub2Date: {
    fontFamily: 'RobotoRegular',
    color: '#a2a2db',
    fontSize: 12,
  },
  cardPrice: {
    fontFamily: 'RobotoBold',
    color: '#4b3ca7',
    fontSize: 18,
    alignSelf: 'center',
  },
})
