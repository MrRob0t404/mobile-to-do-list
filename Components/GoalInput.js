import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }

    const onCancelHandler = () => {
        props.onCancel()
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <TextInput placejolder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title='Add' onPress={addGoalHandler}></Button>
                <Button title='Cancel' color="red" onPress={onCancelHandler}></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})

export default GoalInput;  