import { AsyncStorage,ToastAndroid } from "react-native"

export const setToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
        ToastAndroid.showWithGravity(
            "Error "+error,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
      // Error saving data
    }
  }

  export const getToken = async () => {
     try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          // We have data!!

        }
        return value;
       } catch (error) {

         // Error retrieving data
       }
       return '';
    
  } 

  export const setUser = async (user) => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (error) {
      // Error saving data
    }
  }

  export const getUser = async () => {
    
    try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          // We have data!!
          return value;
        }
       } catch (error) {
         // Error retrieving data
       }
    return {};
  } 