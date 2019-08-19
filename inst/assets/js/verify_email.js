"use strict";

$(document).on("click", "#resend_verification_email", function () {
  var user = auth.currentUser;
  user.sendEmailVerification().then(function () {
    toastr.success("Verification Email Send to " + user.email);
  })["catch"](function (error) {
    toastr.error("Error sending email verification");
    console.error("Error sending email verification", error);
  });
});