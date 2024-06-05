import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
    // Alınan kategori kimliği
    const catId = route.params.categoryId;

    // Gösterilecek yemeklerin filtrelenmesi
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // Ekranın başlığının kategori başlığı olarak ayarlanması
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle
        });

    }, [catId, navigation]);

    // MealsList bileşeninin döndürülmesi ve gösterilecek yemeklerin iletilmesi
    return <MealsList items={displayedMeals} />;
   
};

export default MealsOverviewScreen;
