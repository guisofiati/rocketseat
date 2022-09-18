import * as Notifications from "expo-notifications";

// pegar o token do device para enviar as notificações
export async function getPushNotificationToken() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log("token -> ", pushToken.data);

    return pushToken.data;
  }
}
