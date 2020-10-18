const baseURL = 'https://api.tvmaze.com';

const api = {
  /**
   * Used when we fetch entries to display on front page
   * @param page or pagination
   * @returns a promise of data
   */
  async fetchBatch() {
    const endpoint = `/shows?page=0`;
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => rawData);
  },

  /**
   * Used when we fetch details.
   * Crew and cast info is embedded.
   * @param id used to fetch an entry
   * @returns a promise of data
   */
  async fetchDetails(id){
    const endpoint = `/shows/${id}`;
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => rawData);
  },
};

export default api;
