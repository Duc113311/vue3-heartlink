import { createStore } from "vuex";
import authModule from './auth/authModule'
const baseStore = createStore({
  modules: {
    user: authModule,
  }
})


export default baseStore
