import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  // İçeriklerin çekici görünmesi için çekmece gezinme çubuğu
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' }, // Başlık çubuğunun arka plan rengi
        headerTintColor: 'white', // Başlık çubuğunun metin rengi
        sceneContainerStyle: { backgroundColor: '#3f2f25' }, // Sahne içeriğinin arka plan rengi
        drawerContentStyle: { backgroundColor: '#351401' }, // Çekmece içeriğinin arka plan rengi
        drawerInactiveTintColor: 'white', // Çekmece içeriğindeki etkileşimli olmayan öğelerin metin rengi
        drawerActiveTintColor: '#351401', // Çekmece içeriğindeki etkileşimli öğelerin metin rengi
        drawerActiveBackgroundColor: '#e4baa1', // Çekmece içeriğindeki etkileşimli öğelerin arka plan rengi
      }}
    >
      {/* Kategoriler ekranı */}
      <Drawer.Screen
        name='Kategoriler'
        component={CategoriesScreen}
        options={
          {
            title: 'Tüm Kategoriler', // Başlık
            drawerIcon: ({ color, size }) => ( // İkon
              <Ionicons
                name='list'
                color={color}
                size={size}
              />
            ),
          }}
      />

      {/* Favoriler ekranı */}
      <Drawer.Screen
        name='Favoriler'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => ( // İkon
            <Ionicons
              name='star'
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      {/* Üst durum çubuğu */}
      <StatusBar style='light' />

      {/* Redux mağazasını sağlayıcı olarak kullanarak navigasyonun ana bileşeni */}
      <Provider store={store}>
        <NavigationContainer>
          {/* Yığın gezinme çubuğu */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' }, // Başlık çubuğunun arka plan rengi
              headerTintColor: 'white', // Başlık çubuğunun metin rengi
              contentStyle: { backgroundColor: '#3f2f25' } // İçerik arka plan rengi
            }}
          >
            {/* Çekmece gezinme çubuğu */}
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                //title: 'Tüm Kategoriler', headerShown'u false yaptığımız için 
                headerShown: false // Başlık çubuğunun görünürlüğü
              }}
            />
            {/* Yemeklere Genel Bakış Ekranı */}
            <Stack.Screen
              name='Yemeklere Genel Bakış Ekranı'
              component={MealsOverviewScreen}
            />
            {/* Yemek Detayı Ekranı */}
            <Stack.Screen
              name='Yemek Detayı'
              component={MealDetailScreen}
              options={{
                title: 'Yemekler Hakkında' // Başlık
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
