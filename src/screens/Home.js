import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native'
import Detail from './Detail'
import { SafeAreaView } from 'react-native-safe-area-context'
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode='cover'
          source={require('../images/back1.png')}
        >
          <View style={styles.imageView}>
            <Icon
              name='menu'
              size={30}
              color='black'
              style={{ alignSelf: 'flex-start' }}
            />
            <Icon
              name='account-circle'
              size={30}
              color='black'
              style={{ alignSelf: 'flex-end' }}
            />
          </View>
          <View style={styles.homeHello}>
            <Text style={styles.textHello}>Hello</Text>
            <Text style={styles.subtitleHello}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore quos. necessitatibus magnam ipsum quis, maxime
              obcaecati, aut hic possimus?
            </Text>
          </View>
          <View style={styles.homeSearch}>
            <Image
              source={require('../images/search.png')}
              style={{ height: 14, width: 14 }}
            />
            <TextInput
              placeholder='Search'
              style={{ paddingHorizontal: 20, fontSize: 15, color: 'black' }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail')}
            >
              <View style={styles.viewScrollA}>
                <Image
                  source={require('../images/p.png')}
                  style={{ height: 24, width: 24 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.viewScrollB}>
                <Icon name='office-building' color='white' size={32} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.viewScrollC}>
                <Icon name='bus' color='white' size={32} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.viewScrollD}>
                <Icon name='dots-horizontal' color='white' size={32} />
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.recomendedText}>Recomended</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
            //Todo: same align between
          >
            <View style={styles.secondScrollView}>
              <Image
                source={require('../images/1.jpg')}
                style={styles.secondImage}
              />
              <View style={styles.secondInnerView}>
                <View style={styles.thirdInnerView}>
                  <Text style={styles.thirdText}>
                    Lorem ipsum dolor sit amet, lorem ipsum, amet, lorem ipsum
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#ff5c83' />
              </View>
            </View>

            <View style={styles.secondScrollView}>
              <Image
                source={require('../images/2.jpg')}
                style={styles.secondImage}
              />
              <View style={styles.secondInnerView}>
                <View style={styles.thirdInnerView}>
                  <Text style={styles.thirdText}>
                    Lorem ipsum dolor sit amet, lorem ipsum, amet, lorem ipsum
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#5facdb' />
              </View>
            </View>
            <View style={styles.secondScrollView}>
              <Image
                source={require('../images/3.jpg')}
                style={styles.secondImage}
              />
              <View style={styles.secondInnerView}>
                <View style={styles.thirdInnerView}>
                  <Text style={styles.thirdText}>
                    Lorem ipsum dolor sit amet, lorem ipsum, amet, lorem ipsum
                  </Text>
                </View>
                <Icon name='map-marker' size={25} color='#bb32fe' />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  imageView: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeHello: { paddingHorizontal: 20, marginTop: 25 },
  textHello: { fontSize: 40, color: '#2c698d', fontFamily: 'RobotoBold' },
  subtitleHello: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: 'RobotoRegular',
    color: '#272643',
  },
  homeSearch: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 40,
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  scroll: { marginHorizontal: 10, paddingTop: 20 },
  viewScrollA: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#5facdb',
    marginHorizontal: 15,
  },
  viewScrollB: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#ff5c83',
    marginHorizontal: 15,
  },
  viewScrollC: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#ffa06c',
    marginHorizontal: 15,
  },
  viewScrollD: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: '#bb32fe',
    marginHorizontal: 15,
  },
  recomendedText: {
    color: '#FFF',
    fontFamily: 'RobotoRegular',
    fontSize: 17,
    paddingTop: -10,
    padding: 15,
  },
  secondScrollView: {
    backgroundColor: '#FeFeFe',
    height: 200,
    width: 190,
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 15,
  },
  secondImage: {
    width: 180,
    borderRadius: 10,
    height: 130,
  },
  secondInnerViewA: {
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
  },
  thirdInnerView: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  thirdText: {
    fontFamily: 'RobotoRegular',
    fontSize: 11,
    color: '#a2a2db',
  },
})
