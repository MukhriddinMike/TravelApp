import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

export default class ModalCard extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        {/* <Text style={styles.cardTire}>--------------------------------</Text> */}
        {/* <View style={styles.cardViewSub}>
          <Text style={styles.cardText}>Overall: </Text>
          <Text style={styles.cardText}>$499</Text>
        </View> */}
        <View style={styles.cardViewSub2}>
          <Text style={styles.cardTextSub2}>Name</Text>
          <Text style={styles.cardTextSub2}>Seat</Text>
        </View>
        <View style={styles.nameText}>
          <Text style={styles.cardPrice}>MikePlusPlus</Text>
          <Text style={styles.cardPrice}>74C</Text>
        </View>
        <Text style={styles.cardTire}>--------------------------------</Text>
        <View style={styles.nameText}>
          <Text style={styles.cardViewSub2Date}>Class</Text>
          <Text style={styles.cardViewSub2Date}>Price</Text>
        </View>
        <View style={styles.nameText}>
          <Text style={styles.cardPrice}>Overall</Text>
          <Text style={styles.cardPrice}>$499</Text>
        </View>
        <TouchableHighlight
          underlayColor='#6600bb'
          style={styles.touchHigh}
          onPress={this.props.onPress}
        >
          <Text style={styles.checkOut}>Check Out</Text>
        </TouchableHighlight>
        <Text style={styles.endingText}>
          Thank You for your puchase, fly with S7 Airlines
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    alignSelf: 'center',
    marginTop: 290,
    backgroundColor: '#FFF',
    height: 386,
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
    fontSize: 16,
    alignSelf: 'center',
  },
  nameText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchHigh: {
    width: 200,
    marginLeft: 5,
    elevation: 2,
    marginTop: 25,
    backgroundColor: '#44FEA1',
    paddingVertical: 13,
    borderRadius: 25,
    alignSelf: 'center',
  },
  checkOut: {
    fontFamily: 'RobotoBold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
  endingText: {
    color: '#a2a2db',
    alignSelf: 'center',
    paddingLeft: 32,
    fontSize: 12,
    marginVertical: 16,
    fontFamily: 'RobotoRegular',
  },
})
