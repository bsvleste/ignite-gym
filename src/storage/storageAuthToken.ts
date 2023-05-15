import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_STORAGE } from "@storage/storageConfig";

export async function storageAuthToken(token:string){
  await AsyncStorage.setItem(AUTH_STORAGE,token)
} 
export async function getAuthTokenStorage() {
    const token = await AsyncStorage.getItem(AUTH_STORAGE)
    return token
}
export async function storageAuthTokenRemove(){
  await AsyncStorage.removeItem(AUTH_STORAGE)
}