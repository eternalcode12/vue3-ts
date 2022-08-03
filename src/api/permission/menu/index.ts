import axios from "@/utils/axios";
import { IBaseQuery } from "@/common/ts/base";

/**
 * author: zyj
 * date: 2022-07-26 星期二
 * description: get menu list
 */
export function initMenuList(data: IBaseQuery) {
  return axios({
    url: "/menu/all",
    method: "post",
    data,
  });
}

/**
 * author: zyj
 * date: 2022-07-27 星期三
 * description: get menu list without permission
 */
export function initMenuListWithoutPermission(data: IBaseQuery) {
  return axios({
    url: "/menu/withoutPermission/all",
    method: "post",
    data,
  });
}

export function saveMongo(data: any) {
  return axios({
    url: "/worksheet/add",
    method: "post",
    data,
  });
}

export function getPermissionList(data: IBaseQuery) {
  return axios({
    url: "/permission/all",
    method: "post",
    data,
  });
}