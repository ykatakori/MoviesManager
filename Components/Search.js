// Components/Search.js
import React from 'react';
import {StyleSheet, View, TextInput, Button } from 'react-native';

class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={{marginTop: 40}}>
                <TextInput style={styles.textInput} placeholder="Titre du film"></TextInput>
                <Button title="Rechercher" onPress={() => {}}></Button>
            </View>
        )
    }
}

// Externalisation de style
const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20, 
        height: 50, 
        borderColor: '#ecf0f1', 
        borderWidth: 1, 
        paddingLeft: 5
    }
})   

export default Search;