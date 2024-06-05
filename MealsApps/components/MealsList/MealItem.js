import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    // Navigation hook'unun kullanılması
    const navigation = useNavigation();

    // Yemek öğesinin seçilmesi durumunda işleyici fonksiyon
    function selectMealItemHandler() {
        navigation.navigate('Yemek Detayı', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem} >
            {/* Basıldığında gölge efekti oluşturacak ve Meal Detay ekranına yönlendirecek basılabilir bileşen */}
            <Pressable
                android_ripple={{ color: '#ccc' }} // Android'de basıldığında oluşacak ripple efekti
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)} // Basıldığında opacity değerini değiştirecek stil
                onPress={selectMealItemHandler} // Basıldığında işleyici fonksiyonu çağırma
            >
                <View style={styles.innerContainer} >
                    {/* Yemek resmi */}
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    {/* Yemek detayları bileşeni */}
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4, // Android'de gölge efekti
        shadowColor: 'black', // iOS'de gölge rengi
        shadowOpacity: 0.35, // iOS'de gölge opaklığı
        shadowOffset: { width: 0, height: 2 }, // iOS'de gölge konumu
        shadowRadius: 16, // iOS'de gölge yarıçapı
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5,
    }
});
