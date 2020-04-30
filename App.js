import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

//space-between tüm boşlukları  arasına koyuyor, flexdirection yanyana mı üstüne mi gelcek vs..
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

  //eğer () eklersen onChangeText'e fonksyion execute olur hemen ui render olduğunda biz key basıldığından istedğimiz için sadece ismini yazarız
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/> 
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={closeGoalAdditionHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem item={itemData.item} onDelete={removeGoalHandler}/>}
      />

      {/* <ScrollView> 
        {courseGoals.map((goal) => (
          <View style={styles.listItem} key={goal}>
            <Text >{goal}</Text>
          </View>
        ))}
       </ScrollView>  */}
      {/* Belli sayıda item varsa scrolView kullanılabilir ama sonsuzsa verimli değil.Flastlistte keyi kendi objenin içinden alıyor varsa arrayda*/}
    </View>
  );
}
//Viewların hertürlü flexboxu var ve içindekileri düzenliyor
//main axis-> flexdirection'un
//cross-axis -> flexdirection tersi  row->column row-reverse-column-reverse
//justifyContent->main  alignItems->cross
//flexbox içinde flex verip bölebiliriz main-axis te flexle bölme oluyor
//strech alignItemse kapla demek
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
