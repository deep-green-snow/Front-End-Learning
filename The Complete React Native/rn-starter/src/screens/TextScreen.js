import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [passwrod, setPassword] = useState('');

    return (
        <View>
            <TextInput 
                style={styles.input} 
                onChangeText={(password)=>{ 
                    setPassword(password)
                }}
            />

            { passwrod.length < 5  ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );
    
    // const [name, setName] = useState('');

    // return (
    //     <View>
    //         <TextInput 
    //             style={styles.input} 
    //             autoCapitalize="none"
    //             autoCorrect={false}
    //             value={name}
    //             onChangeText={(newText)=>{ setName(newText) }}
                
    //         />

    //         <Text>This is {name}</Text>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;