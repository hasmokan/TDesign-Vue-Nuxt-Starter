<template>
  <div class="text-lg">您当前的身份是{{ userRole }}</div>

  <div v-if="userRole == 'manager'" class="flex-col">
    <div class="ml-36 text-black">表头:{{ title }}</div>
    <div class="flex mb-9"><div>姓名</div> <div class="ml-96">账号</div></div>
    <div v-for="item in userList" class="flex mt-2">
      <div>{{ item.name }}</div> <div class="ml-96">{{ item.account }}</div>
    </div>
  </div>
  <div v-else> 您没有查看的权限 </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      defalut: '表头',
    },
  })
  let userRole = $ref(useUserStore().userRole)
  let userList = [
    {
      name: '小明',
      account: '12321',
    },
    {
      name: '小红',
      account: '45678',
    },
    {
      name: '小刚',
      account: '78910',
    },
  ]
  watchEffect(() => {
    userRole = useUserStore().userRole
  })
</script>

<style lang="scss" scoped></style>
