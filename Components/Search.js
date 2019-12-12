// Components/Search.js
import React from 'react';
import {StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';

class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} placeholder="Titre du film"/>
                <Button title="Rechercher" onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
}

// Externalisation de style
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 40
    },

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