<script lang="ts" setup>
import DynamicFormVue from "@/components/DynamicForm.vue";
import { IForm } from "@/config/form.js";
import validate from "@/utils/validate";

// 封装的自定义组件
defineComponent({
  DynamicFormVue,
});

const store = useStore();
const dynamicForm = ref();
const loading = ref(false);
const form = reactive<IForm>({
  dynamicForm: [
    {
      value: "",
      enName: "username",
      cnName: "用户名",
      type: "input",
      inputConfig: {
        placeholder: "请输入用户名",
        clearable: true,
        type: "text",
      },
      rules: {
        required: true,
        message: "请输入用户名",
        trigger: ["blur", "change"],
      },
    },
    {
      value: "",
      enName: "username",
      cnName: "密码",
      type: "input",
      inputConfig: {
        type: "password",
        placeholder: "请输入密码",
        clearable: true,
      },
      rules: {
        required: true,
        message: "请输入密码",
        trigger: ["blur", "change"],
      },
    },
  ],
  isBtn: true,
  labelPosition: "top",
});

const submitFn = () => {
  loading.value = true;
  setTimeout(async () => {
    let data: any = await validate(dynamicForm.value.formRef, form, true);
    store.dispatch("loginAction", data);
    loading.value = false;
  }, 1500);
};
</script>

<template>
  <DynamicFormVue :form="form" ref="dynamicForm">
    <template v-slot:btn>
      <el-button class="w-full" :loading="loading" @click="submitFn"
        >登录</el-button
      >
    </template>
  </DynamicFormVue>
</template>
