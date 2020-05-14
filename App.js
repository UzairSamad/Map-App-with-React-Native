import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Header from './src/component/Header'
import Home from './src/component/Home'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class App extends Component {
  

    render() {

        return (
            <View style={styles.container}>
                <Home />
                
            </View>

        )
    }
}

export default App