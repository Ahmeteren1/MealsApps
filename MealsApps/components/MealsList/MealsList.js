import  {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

function MealsList ({items}){
    // Her öğe için bir yemek öğesi oluşturulması için kullanılan işlev
    function renderMealItem(itemData) {
        const item = itemData.item;

        // MealItem bileşenine geçirilecek özelliklerin hazırlanması
        const mealItemProps = {
            id: item.id ,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };

        // MealItem bileşeni oluşturulması ve özelliklerin geçirilmesi
        return (
            <MealItem {...mealItemProps} />
        );

    }

    // MealsList bileşeni
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );

}

export default MealsList;

// Stil tanımları
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
