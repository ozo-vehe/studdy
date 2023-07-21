import { defineStore } from "pinia";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export const useUsers = defineStore('users', {
  state: () => ({
    users: [],
  }),
  getters: {
    currentUser: (state) => {
      return (userId) => state.users.find((user) => user.id == userId);
    }
  },
  actions: {
    async getUsers() {
      try {
        const savedUsers = []
        const col = collection(db, 'users');
        const docs = await getDocs(col);
        docs.forEach((doc) => {
          const data = {
            id: doc.id,
            ...doc.data()
          }
          savedUsers.push(data)
        })

        this.users = savedUsers;
      } catch (err) {
        console.log(err);
      }
    }
  }
})