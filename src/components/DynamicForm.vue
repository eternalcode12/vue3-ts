<script lang="ts" setup>
import { IForm } from "@/config/form";
import { FormInstance } from "element-plus";

const props = defineProps({
  form: {
    type: Object as () => IForm,
    required: true,
    default: () => ({}),
  },
});

const formRef = ref<FormInstance>();
defineExpose({
  formRef,
});
</script>

<template>
  <el-form
    ref="formRef"
    :model="props.form"
    :label-position="props.form.labelPosition || 'top'"
    :label-width="props.form.labelWidth || '120px'"
  >
    <el-form-item
      v-for="(item, index) in props.form.dynamicForm"
      :key="index"
      :prop="'dynamicForm.' + index + '.value'"
      :label="item.cnName"
      :rules="item.rules"
    >
      <template v-if="item.type === 'input'">
        <el-input
          v-model="item.value"
          :placeholder="item.inputConfig?.placeholder || '请输入'"
          :clearable="item.inputConfig?.clearable"
          :type="item.inputConfig?.type"
          :size="item.inputConfig?.size"
        />
      </template>
    </el-form-item>
    <template v-if="props.form.isBtn">
      <el-form-item>
        <slot name="btn"></slot>
      </el-form-item>
    </template>
  </el-form>
</template>
