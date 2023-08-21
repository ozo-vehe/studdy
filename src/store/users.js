import { defineStore } from "pinia";
import db from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const useUsers = defineStore('users', {
  state: () => ({
    users: [],
    loading: false,
    loadingMessage: "",
    isLoggedIn: false,
    userId: null,
  }),
  getters: {
    currentUser: (state, user_id = state.userId) => {
      return state.users.find((user) => user.id == state.userId);
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
    },

    // Login Action
    async login({password, email}) {
      this.loading = true;
      try {
        // Check for the user
        const checkUser = this.users.find((user) => {
          return user.email == email && user.password == password
        })
        
        // If both return the same user, return that user
        if(checkUser) {
          this.userId = checkUser.id;
          this.isLoggedIn = true;
          // Save the user id to local storage
          localStorage.setItem("userId", checkUser.id);
          // Return true
          return true;
        }
        // Else return an invalid login details message
        else {
          // Set the user id to null
          this.userId = null;
          // Return an error
          return new Error("Invalid login details");
        }
      } catch (err) {
        console.log(err);
        this.loadingMessage = err.message;
      }
      this.loading = false;
    },

    // Logout Function
    async logout() {
      console.log("Logged out")
      this.isLoggedIn = false;
    },

    // Signup Function
    async signup(data) {
      console.log(data)
      try {
        this.loading = true;
        // Add a new document with a generated id.
        const userRef = await addDoc(collection(db, "users"), data);
        console.log("Document written with ID: ", userRef.id);
        await this.getUsers();

        this.userId = userRef.id;
        this.isLoggedIn = true;

        return userRef.id;

      } catch(err) {
        console.log(err)
      } finally {
        this.loading = false;
      }
      
    }
  }
})