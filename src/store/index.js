import { createStore } from "vuex";
import * as state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

// Define your Vuex store here.

const store = createStore({
  state,
  actions,
  mutations,
  getters
})

export default store;