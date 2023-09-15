import { Module } from 'vuex';


interface AuthState {
  currentUser: string | null;
}


const authModule: Module<AuthState, any> = {
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

export default authModule;

