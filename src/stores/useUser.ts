type User = 'manager' | 'student'

const userStorageKey = 'user-state'

export const useUserStore = defineStore('user', () => {
  let userRole = $ref<User>('manager')

  const setUser = (_user: User) => {
    userRole = _user
  }

  return { userRole, setUser }
})
