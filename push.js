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

let sub = {};
push.sendNotification(sub, "test message");
