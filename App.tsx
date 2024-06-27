/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// optional but recommended CSS reset:
// import '@tamagui/core/reset.css';
import { TamaguiProvider, View } from 'tamagui'; // or 'tamagui'
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { tamaguiConfig } from './tamagui.config';
import { CheckboxDemo } from './src/CheckboxDemo';
import { AlertDialogDemo } from './src/AlertDialogDemo';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>

    <SafeAreaView style={backgroundStyle}>
      <StatusBar

      />
      <ScrollView

        >
        <Header />
        <CheckboxDemo />
        <AlertDialogDemo/>

      </ScrollView>
    </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
