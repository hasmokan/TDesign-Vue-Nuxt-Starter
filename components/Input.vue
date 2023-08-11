<template>
  <div class="flex w-1/4">
    <input
      class="border border-solid"
      v-model="content"
      type="text"
      placeholder="请输入表头"
    />
    <button class="w-20 border" @click="submit"> 更改 </button>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['changeTitle'])
  let content = $ref('')
  // watchEffect(() => {
  //   console.log(content)
  // })
  let submit = () => {
    emit('changeTitle', content)
    console.log('success')
  }
</script>
