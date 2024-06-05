import { createContext, useState } from "react";

// Favoriler bağlamı oluştur
export const FavoritesContext = createContext({
    ids: [], // Favori yemeklerin kimliklerini içeren bir dizi
    addFavorite: (id) => { }, // Favori ekleme işlevi
    removeFavorite: (id) => { } // Favori kaldırma işlevi
});

// Favoriler bağlamı sağlayıcısı bileşeni
function FavoritesContextProvider({ children }) {
    // Favori yemek kimliklerini depolamak için durum kullan
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    // Favori ekleme işlevi
    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    // Favori kaldırma işlevi
    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) =>
            currentFavIds.filter(mealId => mealId !== id)
        );
    }

    // Bağlam değerini oluştur
    const value = {
        ids: favoriteMealIds, // Favori yemek kimlikleri
        addFavorite: addFavorite, // Favori ekleme işlevi
        removeFavorite: removeFavorite // Favori kaldırma işlevi
    };

    // Bağlam sağlayıcısını döndür
    return (
        <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;
