import * as Notifications from "expo-notifications";

// definir as permissões (som, alerts, icon...)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
