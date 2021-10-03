import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Alert, Button, ActivityIndicator} from 'react-native';
import axios from 'axios';

export default CountryScreen = ({navigation}) => {
    const country = navigation.getParam('country')
    const capital = navigation.getParam('capital')
    const population = navigation.getParam('population')
    const latlng = navigation.getParam('latlng')
    const flag = navigation.getParam('flag')

    const[temperature,setTemperature]=useState(0);
    const[weather_icons,setWeather_icons]=useState([]);
    const[wind_speed,setWind_speed]=useState(0);
    const[precip,setPrecip]=useState(0);
    const [isLoading, setLoading]= useState(false);

    const handleWeather = async() => {
        try{
            setLoading(true)
            const resp = await axios.get(`http://api.weatherstack.com/current?access_key=8fc3be14ff491f3ec96df405c0b60129&query={dublin}`)
            console.log(resp.data.current)
            let {temperature, weather_icons, wind_speed, precip} = resp.data.current
            setPrecip(resp.data.current.precip)
            setTemperature(resp.data.current.temperature)
            setWeather_icons(resp.data.current.weather_icons)
            setWind_speed(resp.data.current.wind_speed)
            setLoading(false)
        }
        catch(err){
            console.log(err)
            Alert.alert(
                "there was an error in fetching data"
            )
        }
    }

    if(isLoading)
        return <ActivityIndicator size="large" color="#00ff00" />
    else
    return(
        <View>
            <Text>{capital}</Text>
            <Button onPress={() => handleWeather() }
                    title="Submit"
                    color="#841584"
            />
            <Text>temperature : {temperature}</Text>
            <Text>weather_icons</Text>
            <Image
                style={styles.flag}
                source={{
                uri: `${weather_icons[0]}`,
                }}
            />
            <Text>wind_speed : {wind_speed}</Text>
            <Text>precip :{precip}</Text>
            <Text>{population}</Text>
            <Text>{latlng}</Text>
            <Text>flag</Text>
            <Image
                style={styles.flag}
                source={{
                uri: `${flag}`,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
      flag: {
        height: 50,
        width: 50,
        margin: 10,
      },
    });