export const apiConstantsURL = {
  users: {
    register: `users/register`,
    verifyOtp: `users/verify-otp/`,
    login: `users/login`,
    forgotpassword: `users/forgot-password`,
    logout: `users/logout-user`,
    updatePassword: `users/update-password`,
    resetPassword: `/verify-otp-password-reset/`,
    createProfile: `/users/create-profile`,
    profileData: `/users/get-user`,
  },
  scholarships: {
    scholarships: `/scholarships/all-scholarships/`,
    overallStatus: `scholarships/overall-status`,
    overallAppliedStatus: `scholarships/get-applied-scholarships`,
    personalizedScholarships: `scholarships/personalized-scholarships`,
    applyScholarship: `scholarships/apply-scholarship`,
  },
};
