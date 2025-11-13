import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { ScrollView } from 'react-native-web';

const Houses = [
  {
    title: 'DC Comics',
    data: ['Superman', 'Batman', 'Wonder Woman'],
  },
  {
    title: 'Marvel Comics',
    data: ['Capitán América', 'Iron Man', 'Thor'],
  },
];

const SectionListScreen = () => {
  return (
    
    <View style={styles.container}>
   
      <SectionList
        sections={Houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
