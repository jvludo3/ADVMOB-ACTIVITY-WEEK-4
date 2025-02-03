import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
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

type ItemProps = {id: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.id}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;