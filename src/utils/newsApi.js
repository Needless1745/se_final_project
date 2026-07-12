const NEWS_API_KEY = "79d0356560b84eb4b623f60243f78b47";

const BASE_URL = "https://newsapi.org/v2/everything";

export function getNews(query) {
  return fetch(
    `${BASE_URL}?q=${query}&apiKey=${NEWS_API_KEY}&pageSize=100`,
  ).then(async (res) => {
    const data = await res.json();

    if (!res.ok) {
      console.log(data);
      return Promise.reject(data);
    }

    return data;
  });
}

export default getNews;
