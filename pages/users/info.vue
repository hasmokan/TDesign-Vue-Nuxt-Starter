<template>
  <div
    class="absolute bottom-0 flex flex-col items-center w-full h-full justify-center gap-y-8"
  >
    <Input @change-title="updateInputTitle" />
    <List v-model:title="inputTitle"></List>
  </div>
</template>

<script setup lang="ts">
  let inputTitle = $ref('请输入表头')
  const updateInputTitle = (newTitle: string) => {
    inputTitle = newTitle
    console.log(newTitle)
  }
</script>

<style lang="scss" scoped></style>
