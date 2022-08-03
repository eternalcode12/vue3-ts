import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { IAuth } from "@/common/ts/user";

interface IState {
  userInfo: IAuth;
  [key: string]: any;
}

const state: IState = {
  userInfo: {},
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
