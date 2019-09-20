import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState([])

  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }])
    setIsAddMode(false);
  }

  const OnDelete = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.view}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAdditionHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} OnDelete={OnDelete} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  view:
  {
    padding: 50
  }
})

