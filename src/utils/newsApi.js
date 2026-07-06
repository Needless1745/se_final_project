const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2/everything";

export function getNews(query) {
  return fetch(
    `${BASE_URL}?q=${query}&apiKey=${NEWS_API_KEY}&pageSize=100`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }

    return res.json();
  });
}

export default getNews;
