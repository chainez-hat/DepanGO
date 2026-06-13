import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

// Intercepteur des requêtes
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("une erreur est survenue:", error);
    return Promise.reject(new Error(error));
  },
);


// Intercepteur des réponses
instance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      if (localStorage.getItem("token")) {
  alert("Votre session a expiré. Veuillez vous reconnecter.");
  }

      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("user_id");
      localStorage.removeItem("first_name");

      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  },
);

export default instance;
