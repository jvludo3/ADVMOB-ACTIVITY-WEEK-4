import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};



const DATA: ItemData[] = [
  {
    id: 'To do list: ',
    title: 'Title',
  },
  {
    id: 'Wake up early',
    title: 'Morning',
  },
  {
    id: 'Drink water ',
    title: 'morning',
  },
  {
    id: 'fix bed',
    title: 'morning',
  },
  {
    id: 'check socmed ',
    title: 'Morning',
  },
    {
    id: 'cook rice for lunch ',
    title: 'morning',
  },
    {
    id: 'open laptop ',
    title: 'Morning',
  },
    {
    id: 'check ongoing manga ',
    title: 'Morning',
  },
    {
    id: 'read manga ',
    title: 'Morning',
  },
    {
    id: 'check gclass ',
    title: 'Morning',
  },
    {
    id: 'eat lunch ',
    title: 'afternoon',
  },
    {
    id: 'clean dishes ',
    title: 'afternoon',
  },
    {
    id: 'do some school tasks ',
    title: 'afternoon',
  },
    {
    id: 'power nap ',
    title: 'afternoon',
  },
    {
    id: 'take a bath ',
    title: 'evening',
  },
    {
    id: 'go to gym ',
    title: 'evening',
  },
    {
    id: 'brisk walk ',
    title: 'evening',
  },
    {
    id: 'play some games ',
    title: 'evening',
  },
    {
    id: 'watch some youtube ',
    title: 'evening',
  },
    {
    id: 'cook rice for dinner ',
    title: 'evening',
  },
    {
    id: 'eat dinner ',
    title: 'evening',
  },
    {
    id: 'play some games ',
    title: 'evening',
  },
    {
    id: 'watch some youtube ',
    title: 'evening',
  },
    {
    id: 'clean dishes ',
    title: 'evening',
  },
    {
    id: 'watch youtube ',
    title: 'Morning',
  },
    {
    id: 'sleep ',
    title: 'Morning',
  },
];

const COLORS = [ "#FF5733", "#33FF57","#3357FF","#FF33A1","#FF9633"];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.id}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? '#4b3621' : COLORS[index % COLORS.length];
    const color = isSelected ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;