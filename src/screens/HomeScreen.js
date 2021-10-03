import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import api from './api';

export default HomeScreen = ({navigation}) => {
    const [country, setCountry]= useState(''); 
    const [isLoading, setLoading]= useState(false);
    const handleCountry = async() => {
        try{
            setLoading(true)
            const resp = await api.get(`name/${country}?access_key=fa572ba6e3b78d6a99f68c1fab63bdcc`)
            setLoading(false)
        }
        catch(err){
            console.log(err)
            Alert.alert(
                "There was an error in fetching data"
            )
            setLoading(false)   
        }
        
        const {capital, population, latlng, flag} = resp
     //   console.log(resp)
        console.log(country)
        navigation.navigate('Country', {country,capital,population,latlng,flag})
    }   
    if(isLoading)
        return <ActivityIndicator size="large" color="#00ff00" />
    else
    return(
        <View>
            <TextInput style={styles.input} onChangeText ={(text) => setCountry(text)} value={country} placeholder="Enter Country"/>
            <Button onPress={() => handleCountry() }
                    title="Submit"
                    color="#841584"
                    disabled={country !== '' ? false : true} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
      input: {
        height: 40,
        margin: 30,
        borderWidth: 1,
        padding: 10,
      },
    });