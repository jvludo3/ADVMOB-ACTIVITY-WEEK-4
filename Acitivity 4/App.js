import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper'; // added import for Checkbox from react-native-paper
 
type ItemData = { 
  id: string;
  title: string;
  done: boolean; // added a new 'done' property to track completion status
};
 
const DATA: ItemData[] = [
  { id: '001', title: 'Wake up early', done: false },
  { id: '002', title: 'Drink water', done: false },
  { id: '003', title: 'Fix bed', done: false },
  { id: '004', title: 'Check social media', done: false },
  { id: '005', title: 'Cook rice for lunch', done: false },
  { id: '006', title: 'Open laptop', done: false },
  { id: '007', title: 'Check ongoing manga', done: false },
  { id: '008', title: 'Read manga', done: false },
  { id: '009', title: 'Check Google Classroom', done: false },
  { id: '010', title: 'Eat lunch', done: false },
  { id: '011', title: 'Clean dishes', done: false },
  { id: '012', title: 'Do some school tasks', done: false },
  { id: '013', title: 'Power nap', done: false },
  { id: '014', title: 'Take a bath', done: false },
  { id: '015', title: 'Go to gym', done: false },
  { id: '016', title: 'Brisk walk', done: false },
  { id: '017', title: 'Play some games', done: false },
  { id: '018', title: 'Watch some YouTube', done: false },
  { id: '019', title: 'Cook rice for dinner', done: false },
  { id: '020', title: 'Eat dinner', done: false },
  { id: '021', title: 'check socmed', done: false },
  { id: '022', title: 'play games with friends', done: false },
  { id: '023', title: 'read some manga real quick', done: false },
  { id: '024', title: 'Clean dishes', done: false },
  { id: '025', title: 'Sleep', done: false },
];

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF9633'];

type TaskProps = { 
  item: ItemData; 
  onToggle: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onToggle, backgroundColor, textColor }: TaskProps) => ( 
  <TouchableOpacity onPress={onToggle} style={[styles.item, { backgroundColor }]}> 
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Checkbox
      status={item.done ? 'checked' : 'unchecked'} // Checkbox status is tied to 'done' property
      onPress={onToggle} // Calls onToggle to toggle task completion
      color={item.done ? 'white' : '#6495ED'} // checkbox color changes based on completion status
      uncheckedColor='#6495ED' // Color when the checkbox is unchecked
    />
  </TouchableOpacity>
);

const App = () => {
  const [data, setData] = useState(DATA);

  const toggleDone = (id: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const finishedCount = data.filter((task) => task.done).length; // Counts the number of finished tasks
  const notFinishedCount = data.length - finishedCount; // Calculates number of tasks that are not finished

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.done ? '#4b3621' : COLORS[index % COLORS.length];
    const textColor = item.done ? 'white' : 'black';

    return (
      <Item
        item={item}
        onToggle={() => toggleDone(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Todo List</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}> DONE: {finishedCount}</Text> 
          <Text style={styles.summaryText}> TO DO: {notFinishedCount}</Text> 
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={data}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ADD8E6',
  },
  header: {
    backgroundColor: '#77DD77',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
});

export default App;
