import { IAuth } from "@/common/ts/user";
import router from "@/router";

const mutations = {
  setUserInfo(state: any, userInfo: IAuth) {
    state.userInfo = userInfo;
    router.push("/admin");
  },
};

export default mutations;
