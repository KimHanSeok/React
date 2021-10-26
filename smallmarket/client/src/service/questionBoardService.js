export default class BoardService {
  constructor(httpClient, base, token) {
    this.httpClient = httpClient;
    this.base = base;
    this.token = token;
  }

  async getBoards() {
    return await this.httpClient.createAxios().get(this.base + "/board");
  }

  getBoard(id) {
    return this.httpClient.createAxios().post(this.base + `/board/${id}`);
  }

  createBoard(title, content) {
    return this.httpClient.createAxios().post(this.base + "/board", {
      title,
      content,
      headers: this.getHeader()
    });
  }

  getHeader() {
    const token = this.token;
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}