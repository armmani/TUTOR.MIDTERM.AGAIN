import { create } from "zustand";
import { persist } from "zustand/middleware";
import authApi from "../api/auth";

const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      userId: null,
      actionLogin: async (input) => {
        try {
          const res = await authApi.login();
          set({ token: res.data.accessToken, user: res.data.userId });
        } catch (error) {
          console.log(error);

          throw error;
        }
      },

      actionRegister: async (input) => {
        try {
          await authApi.register(input);
        } catch (error) {
          console.log(error);

          throw error;
        }
      },
    }),
    {
      name: "user-store",
    }
  )
);

export default useAuthStore