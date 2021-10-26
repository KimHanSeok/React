export default class TokenStorage {
  saveToken(username, token) {
    localStorage.setItem(username, token); 
  }

  async getToken(username) { // can take await
    return localStorage.getItem(username);
  }

  clearToken(username) {
    localStorage.clear(username);
  }
}