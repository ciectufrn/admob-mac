import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mobileAds from 'react-native-google-mobile-ads';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

const Stack = createStackNavigator();

function App() {

  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('ADS CONFIGURED', adapterStatuses);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;