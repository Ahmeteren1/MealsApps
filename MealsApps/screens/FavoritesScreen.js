import { View, Text, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
//import { useContext } from "react";

//import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
    // Redux store'dan favori yemeklerin kimliklerini al
    const favoriteMealIds = useSelector(state => state.favoritesMeals.ids);

    // Favori yemekler listesini oluştur
    const favoriteMeals = MEALS.filter(meal =>
        favoriteMealIds.includes(meal.id)
    );

    // Eğer favori yemekler listesi boşsa
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>Henüz Favori Yemeğiniz Bulunmamaktadır</Text>
            </View>
        );
    }

    // Favori yemekler listesini MealsList bileşeni ile render et
    return (
        <MealsList items={favoriteMeals} />
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});
