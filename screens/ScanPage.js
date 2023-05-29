import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import SearchBar from "../components/searchBar/SearchBar";

const ScanPage = ({navigation}) => {

    const handleSearch = (searchText) => {
        console.log('perfoming search for: ', searchText);
        navigation.navigate('ListRestaurants');
    }

    return <View style={styles.container}>
        <SearchBar onSearch={handleSearch} style={styles.searchBar}/>
        <Text style={styles.orText}>or</Text>
        <Image source={require('../assets/scan.png')} style={styles.scanLogo}/>
        <Text style={styles.scanText}>Scan, Pay & Enjoy!</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7941D',
        height: '100%'
    },
    orText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60
    },
    scanText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 80
    },
    scanLogo: {
        marginLeft: 130,
        marginTop: 50
    }
})
export default ScanPage;