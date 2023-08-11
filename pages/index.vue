<template>
  <div
    class="bg-gradient-to-r from-red-100 to-blue-100 absolute bottom-0 flex flex-col items-center w-full h-full justify-center gap-y-8"
  >
    <!-- <div class="text-purple-300 text-6xl">欢迎来到</div> -->
    <div class="text-blue-300 text-9xl">音疗世界</div>
  </div>
</template>

<script setup lang="ts">
  const role = $ref<'manager' | 'student'>('manager')
  const theme = useThemeStore()
</script>

<style></style>
