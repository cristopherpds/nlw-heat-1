export const API_URL = import.meta.env.VITE_APP_API_URL as string;
export const GITHUB_REDIRECT_URI = import.meta.env.VITE_APP_GITHUB_REDIRECT_URI as string;
export const GITHUB_CLIENT_ID = import.meta.env.VITE_APP_GITHUB_CLIENT_ID as string;
export const GITHUB_CLIENT_SECRET = import.meta.env.VITE_APP_GITHUB_CLIENT_SECRET as string;
export const GITHUB_OAUTH_LINK = `https://github.com/login/oauth/authorize?scope=user&client_id=${GITHUB_CLIENT_ID}`;
