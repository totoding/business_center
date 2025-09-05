import { create } from 'zustand'

interface UserState {
  userInfo: any
  setUserInfo: (userInfo: any) => void
}
export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
}))