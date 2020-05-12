import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Header from './src/component/Header'
import Home from './src/component/Home'
import Geolocation from '@react-native-community/geolocation';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class App extends Component {
    getUserLocationHandler = () => {
        // navigator.geolocation.getCurrentPosition(postion => {
        //   const location = JSON.stringify(postion)
        //   console.log(location)
        // }, err =>  console.log(err) )
        Geolocation.getCurrentPosition(info => console.log(info));

    }

    render() {

        return (
            <View style={styles.container}>
                <Home onGetLocation={this.getUserLocationHandler} />
            </View>

        )
    }
}

export default App