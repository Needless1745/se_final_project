import "./NewsCard.css";
import { formatDate } from "../../utils/dateFormat";

function NewsCard({
  urlToImage,
  url,
  description,
  publishedAt,
  title,
  source,
  keyword,
}) {
  return (
    <article className="news-card">
      <img src={urlToImage} alt={title} className="news-card__img" />
      <div className="news-card__content">
        <p className="news-card__date">{formatDate(publishedAt)}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__desc">{description}</p>
        <p className="news-card__publisher">{source.name}</p>
      </div>
    </article>
  );
}
export default NewsCard;
