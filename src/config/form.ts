/**
 * author: zyj
 * date: 2022-07-26 星期二
 * description: 表单配置
 */
export interface IForm {
  isBtn?: boolean;
  labelWidth?: number; // label宽度
  labelPosition?: "left" | "right" | "top"; // label位置
  dynamicForm: IFormItem[];
}

export interface IFormItem {
  value: any;
  enName: string;
  cnName: string;
  type: "input" | "select";
  inputConfig?: {
    type?: "text" | "password" | "number" | "textarea";
    placeholder?: string;
    clearable?: boolean;
    size?: "small" | "large" | "default";
  };
  selectConfig?: {
    options: Array<{
      value: string | number;
      label: string;
      disabled?: boolean;
    }>;
    placeholder?: string;
  };
  rules?:
    | Array<{
        required?: boolean;
        message?: string;
        trigger?: "blur" | "change" | Array<"blur" | "change">;
      }>
    | {
        required?: boolean;
        message?: string;
        trigger?: "blur" | "change" | Array<"blur" | "change">;
      };
}
