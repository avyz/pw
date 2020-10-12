var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BFHc98ivsYL7z3h0cdRxSRIrVv9L4l5-qa2ui-r7VnQ_eF9gxqObj5BY2VrAEf3XBbAmykLApfpx6FY4vuMJjCI",
  privateKey: "e-UEE-xO5JPac_WXV1CDVzh-tRtKwfzG4hF7bDzEN1s",
};

push.setVapidDetails(
  "mailto:maruni.avif@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d_Ep7jASVXw:APA91bGGuTCPPgVea2wUoMmLd3dvK1oSDBMLiH-vNuLcNTXrKDuQGacKCmtqFeivOPw-cg9Z0p2ztxOf0o_4C16FuqlFGui3syQnQRpsf9KKsL21Z5zbqeDItifoRGFY4FhriDEeNuQ2",
  expirationTime: null,
  keys: {
    p256dh:
      "BPetzJ_N5c9NnSpxb9EEkYaUkIzBMZM_VathJ8P-QK_mm5NJ_0TjWq1hELXuZRrM0VJVH3DtaT8MtY-ZyonJI2I",
    auth: "zWzVqBpdllekvvZ29X1pMQ",
  },
};
push.sendNotification(sub, "test message");
