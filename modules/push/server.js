import webpush from "web-push";

export const init = (publicKey, privateKey) => {
  try {
    webpush.setVapidDetails(
      "mailto:example@yourdomain.org",
      publicKey,
      privateKey
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const sendNotification = async (subscription, payload) => {
  try {
    const response = await webpush.sendNotification(subscription, payload);
    return response;
  } catch (error) {
    console.error("sendNotification:", error.message);
    return {
      error: true,
      description_error: error.message,
    };
  }
};
