import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stateless = () => {
    return (
        <View style={styles.container}>
            <Text>Stateless</Text>
        </View>
    )
}

export default Stateless

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})
