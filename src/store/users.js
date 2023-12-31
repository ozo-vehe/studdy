import { defineStore } from "pinia";
import { firebase_app } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL  } from 'firebase/storage';

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
      return state.users.find((user) => user.id == user_id);
    }
  },
  actions: {
    async getUsers() {
      try {
        const db = getFirestore(app);
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

    // Get a single user
    async getUser(id) {
      try {
        const user = this.users.find((user) => user.id == id);
        return user;
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
          // Save user to local storage
          localStorage.setItem("user", JSON.stringify(checkUser));
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
      // Delete user data from local storage
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
    },

    // Signup Function
    async signup(data) {
      console.log(data)
      const db = getFirestore(app);
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
      
    },

    // Upload profile picture
    async uploadImage(file) {
      // Variable to hold the image url
      let imageUrl = null;
      const storage = getStorage(app);
      console.log(storage);
      const imageName = file.name;
      console.log(imageName);
      console.log("Creating storage ref");
      const storageRef = ref(storage, imageName);
      console.log(storageRef);
      console.log("Saving...");

      await uploadBytes(storageRef, file).then((snapshot) => {
        console.log("successfully uploaded");
        console.log(snapshot);
      }).catch((error) => {
        console.log(error);
      })
      
      console.log("Getting download URL")
      // Get image URL to use in the project object to be stored
      await getDownloadURL(storageRef).then((url) => {
        imageUrl = url;
        return url;
      }).catch((error) => {
        console.log(error);
      })

      return imageUrl;
    },
  }
})