import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons'
import ModalCard from './ModalCard'
import ListCard from './ListCard'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
export default class Detail extends Component {
  state = {
    modalVisible: false,
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }
  render() {
    const { modalVisible } = this.state
    return (
      <ImageBackground
        source={require('../images/back2.png')}
        style={styles.imageBack}
      >
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Ionicons
              name='chevron-back'
              size={24}
              color='black'
              style={{ alignSelf: 'flex-start' }}
            />
          </TouchableOpacity>
          <Icon
            name='account-circle'
            size={30}
            color='#a2a2db'
            style={{ alignSelf: 'flex-end' }}
          />
        </View>

        <View style={styles.planeLogo}>
          <View style={styles.innerViewTop}>
            <Image
              source={require('../images/p.png')}
              style={styles.centerLogo}
            />
          </View>
        </View>
        <View style={styles.textLocation}>
          <Text style={styles.textLocString}>INCH</Text>
          <Text style={styles.middleDots}>---------------</Text>
          <Text style={styles.textLocString}>TAS</Text>
        </View>
        <View style={styles.textLocationCap}>
          <Text style={styles.textLocStringCap}>Seoul,KR</Text>
          <Text style={styles.textLocStringCap}>Tashkent,UZ</Text>
        </View>
        <Text style={styles.textDate}>28 March,2021</Text>

        <View style={styles.middle}>
          <Image
            source={require('../images/dots.png')}
            style={styles.imageDots}
          />
          <Image
            source={require('../images/filter.png')}
            style={styles.imageFilter}
          />
        </View>

        <ScrollView
          style={styles.scrollMar}
          showsHorizontalScrollIndicator={false}
        >
          <ListCard onPress={() => this.setModalVisible(true)} />

          <View>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => Alert.alert('Model is closed')}
            >
              <ModalCard onPress={() => this.setModalVisible(!modalVisible)} />
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  imageBack: {
    width: '100%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    marginTop: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planeLogo: {
    width: '100%',
    paddingTop: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLogo: {
    height: 26,
    width: 26,
  },
  innerViewTop: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#5facdb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  textLocString: {
    fontSize: 24,
    fontFamily: 'RobotoBold',
    color: '#FFFFFF',
  },
  middleDots: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a2a2db',
    paddingHorizontal: 15,
  },
  textLocStringCap: {
    fontFamily: 'RobotoBold',
    color: '#a2a2db',
  },
  textLocationCap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  textDate: {
    paddingHorizontal: 70,
    fontFamily: 'RobotoBold',
    color: '#a2a2db',
  },
  middle: {
    flexDirection: 'row',
    paddingHorizontal: 70,
    marginTop: 60,
    justifyContent: 'space-between',
  },
  imageDots: {
    width: 18,
    height: 16,
  },
  imageFilter: {
    width: 18,
    height: 16,
  },
  scrollMar: {
    marginVertical: 5,
  },
})
