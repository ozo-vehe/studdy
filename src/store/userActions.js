import { defineStore } from "pinia";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export const useUsers = defineStore('users', {
  state: () => ({
    isLoggedIn: false,
    loading: false,
  }),
  actions: {
    login: async(userDetails) => {
      this.loading = true;
      try {
        console.log("Logging in");
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
      this.isLoggedIn = true;
    },

    signup: (userDetails) => {
      this.loading = true;
      try {
        console.log("Signing up");
      } catch(err) {
        console.log(err);
      }
      this.loading = false;
    }
  }
})