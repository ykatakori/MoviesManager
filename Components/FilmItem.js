import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class FilmItem extends React.Component {
    render () {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.titleText}>Titre du film</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 100
    },
    titleText: {

    }
})

export default FilmItem;