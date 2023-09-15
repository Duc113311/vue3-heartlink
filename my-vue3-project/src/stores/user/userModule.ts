import { Module } from 'vuex';


interface UserState {
  currentUser: string | null;
}


const userModule: Module<UserState, any> = {
  state: {
    currentUser: null,
  },
  getters: {
    // Define getters here
  },
  mutations: {
    // Define mutations here
  },
  actions: {
    // Define actions here
  },
};

export default userModule;
