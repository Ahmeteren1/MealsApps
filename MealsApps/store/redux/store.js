import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';

// Redux store konfigürasyonunu oluştur
export const store = configureStore({
    reducer: {
        // Favori yemekler azaltıcısını favorilerMeals anahtarında kullan
        favoritesMeals: favoritesReducer
    }
});
