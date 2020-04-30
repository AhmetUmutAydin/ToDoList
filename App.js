import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode]=useState(false);

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals,enteredGoal]);
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
    //console.log(courseGoals);
  };

  const removeGoalHandler=goalKey=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=> goal.key !== goalKey );
    });
  };

  const closeGoalAdditionHandler=()=>{
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/> 
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={closeGoalAdditionHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem item={itemData.item} onDelete={removeGoalHandler}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
