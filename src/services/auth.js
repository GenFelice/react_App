import { get as getUtenti } from "./utenti";

export async function login({ email, password }) {
  const listaUtenti = getUtenti({ email, password });
  if (listaUtenti.length === 1) {
    localStorage.setItem("authUser", JSON.stringify(listaUtenti[0]));
    return listaUtenti[0];
  }
  return null;
}

export function logout() {
  localStorage.removeItem("authUser");
}

export function getCurrentUser() {
  const rawUser = localStorage.getItem("authUser");
  return rawUser ? JSON.parse(rawUser) : null;
}

export function isAuthenticated() {
    return (getCurrentUser() !== null);

}