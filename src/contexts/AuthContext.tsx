import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { getUserStorage, removeUserStorage, storageUserSave } from "@storage/storageUser";
import { AppError } from "@utils/AppError";
import { useToast } from "native-base";
import { ReactNode, createContext, useEffect, useState } from "react";
export type AutContextdataProps = {
  user: UserDTO | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoading: boolean
  isLoadingUserStorageData: boolean
}

type AuthContextProps = {
  children: ReactNode
}
export const AuthContext = createContext<AutContextdataProps>({} as AutContextdataProps);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<UserDTO | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)
  const toast = useToast()

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true)
      await removeUserStorage()
      setUser(null)
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }
  async function signIn(email: string, password: string) {
    try {
      setIsLoading(true)
      const { data } = await api.post('/sessions', { email, password })
      if (data.user) {
        setUser(data.user)
        storageUserSave(data.user)
      }
    } catch (error) {
      const isAppErrro = error instanceof AppError;
      const errorTitle = isAppErrro ? error.message : 'Não foi possivel criar conta. Tente novamente mais tarde'
      if (isAppErrro) {
        toast.show({
          title: `${errorTitle}`,
          placement: 'top',
          bgColor: "red.500",
        })
        setIsLoading(false)
      }
    } finally {
      setIsLoading(false)
    }
  }
  async function getUserData() {
    try {
      const userLogged = await getUserStorage()
      if (userLogged) {
        setUser(userLogged)

      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading, isLoadingUserStorageData }}>
      {children}
    </AuthContext.Provider>
  )
}