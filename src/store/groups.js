import { defineStore } from "pinia";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export const useGroups = defineStore('groups', {
  state: () => ({
    groups: [],
  }),
  getters: {
    getUserGroup: (state) => {
      return (groupId) => state.groups.find((group) => group.id == groupId);
    }
  },
  actions: {
    async getGroups() {
      try {
        const savedGroups = []
        const col = collection(db, 'groups');
        const docs = await getDocs(col);
        docs.forEach((doc) => {
          const data = {
            id: doc.id,
            ...doc.data()
          }
          savedGroups.push(data)
        })

        this.groups = savedGroups;
      } catch (err) {
        console.log(err);
      }
    },

    // Get user by specific id
    // async getUserById() {
    //   const ID = "5kqLhGY2o88ONb0gwG7G";
    //   try {
    //     const user = this.users.filter(user => user.id === ID)
    //     this.currentUser = {...user};
    //     console.log(user);
    //   } catch(err) {
    //     console.log(err);
    //   }
    // }
  }
})