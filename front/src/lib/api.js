const API_URL = "http://localhost:5000/api";

export const apiFetch = async (url, options = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  return res;
};
