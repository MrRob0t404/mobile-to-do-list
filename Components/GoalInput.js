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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color="red" onPress={onCancelHandler}></Button>
                    </View>
                </View>
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
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },
    button: {
        width: "40%"
    }
})

export default GoalInput;  