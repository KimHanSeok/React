export default class AuthService { // for sms
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(username, password, name, email) { // more simplify. using fetch method
    const data = await this.http.fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        name,
        email,
      }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async login(username, password) {
    const data = await this.http.fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
