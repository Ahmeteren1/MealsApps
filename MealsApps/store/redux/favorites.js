import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit ile bir dilim oluşturun
const favoritesSlice = createSlice({
    name: 'Favoriler', // Dilimin adı, Redux araçları tarafından kullanılacak
    initialState: {
        ids: [] // Favori öğelerin kimliklerini içeren bir dizi başlangıç durumu
    },
    reducers: {
        addFavorite: (state, action) => {
            // Favori ekleme işlemi
            // Yeni favoriyi kimlik listesine ekleyin
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            // Favori kaldırma işlemi
            // Kaldırılacak favorinin kimliğini bulun ve listeden kaldırın
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

// Dilim oluşturucularını ve dilim adını dışa aktarın
export const  addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

// Dilimi ve azaltıcıyı dışa aktarın
export default favoritesSlice.reducer;
