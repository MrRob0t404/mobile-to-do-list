import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.textInputContainer}>
            <TextInput placejolder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} width='80%' /> 
            <Button title='Add' onPress={() => props.addGoalHandler(enteredGoal)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    }, textInputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})

export default GoalInput;  