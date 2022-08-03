import { IForm } from "@/config/form";
import md5 from "md5";

const validate = (formEl: any, origin: IForm, _isMd5 = false) => {
  return new Promise((resolve, reject) => {
    formEl.validate((valid: any, fields: any) => {
      if (valid) {
        let form: any = {};
        origin.dynamicForm.forEach((item: any) => {
          if (item.enName === "password") {
            form[item.enName] = _isMd5 ? md5(item.value) : item.value;
          } else {
            form[item.enName] = item.value;
          }
        });
        resolve(form);
      } else {
        console.log("error submit!", fields);
        reject();
      }
    });
  });
};

export default validate;
