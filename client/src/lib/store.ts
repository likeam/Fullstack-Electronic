import { doc, getDoc } from "firebase/firestore/lite";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { db } from "./firebase";
import { ProductProps } from "../type";



interface CartProduct extends ProductProps {
    quantity: number;
  }
  
  interface UserType {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    avatar: string;
    id: string;
  }
  
  interface StoreType {
    // user
    currentUser: UserType | null;
    isLoading: boolean;
    getUserInfo: (uid: any) => Promise<void>;
    // cart
        cartProduct: CartProduct[];
        addToCart: (product: ProductProps) => Promise<void>;
    //     decreaseQuantity: (productId: number) => void;
    //     removeFromCart: (productId: number) => void;
    //     resetCart: () => void;
    //     // // favorite
    //     favoriteProduct: CartProduct[];
    //     addToFavorite: (product: ProductProps) => Promise<void>;
    //     removeFromFavorite: (productId: number) => void;
    //     resetFavorite: () => void;
    }


const customStorage = {
    getItem: (name: string) => {
        const item = localStorage.getItem(name);
        return item? JSON.parse(item) : null;
    },
    setItem: (name: string, value: any) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
        localStorage.removeItem(name);
    },
}

export const store = create<StoreType>()(persist((set) => ({
    currentUser:null,
    isLoading: true,
    cartProduct: [],
    favoriteProduct: [],

    getUserInfo: async(uid: any) => {
        if(!uid) return set({ currentUser:null, isLoading:false})

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        try {
            if(docSnap.exists()){
                set({currentUser: docSnap.date() as UserType, isLoading: false});
            }
        } catch (error) {
            console.log('Get user Info', error);
            set({currentUser: null, isLoading: false})
        }
    },
    addToCart: (product:ProductProps) => {
        return new Promise<void>((resolve) => {
            set((state:StoreType) => {
                const existingProduct = state.cartProduct.find((p) => p._id === product._id)
                if(existingProduct){
                    return
                } else{
                    
                }
            })
        })
    }

}),{
    name: 'khalid-storage',
    storage: customStorage
}
))