export const Environment = {
  get URL_BASE() {
    return import.meta.env.VITE_API_URL || "http://localhost:3000";
  },

  get ACCESS_TOKEN() {
    const path = import.meta.env.VITE_KEY_ACCESS_TOKEN || "APP_ACCESS_TOKEN";
    const access_token = sessionStorage.getItem(path);
    let actualValue = "";
    if (access_token) actualValue = JSON.parse(access_token);
    return actualValue;
  },
};
