<template>
  <div
    class="mt-[-15px] flex w-full bg-white h-20 rounded-3xl items-center shadow-md"
  >
    <div class="h-20 mt-3 flex w-full items-center">
      <img class="ml-5 w-10 h-10" src="/img/homelogo.png" alt="" />
      <div class="flex h-10 ml-5 justify-center items-center text-lg"
        ><div>音疗世界</div>
      </div>
      <ul class="flex ml-5 gap-5">
        <li><NuxtLink to="/">首页</NuxtLink></li>
        <!-- <li><NuxtLink to="/users/user">用户信息</NuxtLink></li> -->
        <li><NuxtLink to="/users/info">账号管理</NuxtLink></li>
      </ul>
      <div class="absolute right-7">
        {{ userRole }},您好
        <TButton @click="switchUser"> 切换用户</TButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  let userRole = $ref<UserInfoType>('manager')
  let userStoreRole = useUserStore()
  type UserInfoType = 'manager' | 'student'
  const props = defineProps({
    user: {
      type: String as () => 'manager' | 'student',
      default: 'manager',
    },
  })

  let switchUser = () => {
    userRole = userRole === 'manager' ? 'student' : 'manager'
  }
  watchEffect(() => {
    userStoreRole.userRole = userRole
    // console.log('ro::' + userRole)
    // console.log(userStoreRole.userRole)
  })
  onMounted(() => {
    userRole = props.user
  })
</script>
