import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goal }])
  }

  const OnDelete = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
    console.log('delete: ', goalId)
  }

  return (
    <View style={{ padding: 50 }}>

      <GoalInput addGoalHandler={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} OnDelete={OnDelete} />
        )} />
    </View>
  );
}


