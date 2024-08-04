import { create } from "zustand";
import { persist } from "zustand/middleware";


export const store = create()(persist((set) => ({
    
})))