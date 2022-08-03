import { login } from "@/api/permission/user";
import { ElMessage } from "element-plus";

const actions = {
  loginAction({ commit }: any, data: any) {
    return new Promise<void>((resolve, reject) => {
      login(data)
        .then((res: any) => {
          commit("setUserInfo", res.data);
          ElMessage.success(res.msg);
          resolve();
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  },
};

export default actions;
