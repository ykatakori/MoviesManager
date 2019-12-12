// Components/Search.js
import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';

class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} placeholder="Titre du film"></TextInput>
                <Button title="Rechercher" onPress={() => {}}></Button>
                <FlatList data={[{key: 'a'}, {key: 'b'}]} renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
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