export const Environment = {
  get URL_BASE() {
    return import.meta.env.VITE_API_URL || "http://localhost:3000";
  },
};
