import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <View >
                <Button title='Fetch location' onPress={this.props.onGetLocation} />
                {/* <TouchableOpacity  style={{backgroundColor:'black',width:80,height:50,marginLeft:150,marginTop:30,borderRadius:3}}>
                    <Text style={{color:'white',display:'flex',padding:8}}>Press me</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

export default Home