import "./NewsCard.css";
import { useState } from "react";
import { formatDate } from "../../utils/dateFormat";
import bookmarkIcon from "../../assets/bookmark__icon.png";
import bookmarkClicked from "../../assets/bookmark__marked.png";

function NewsCard({
  urlToImage,
  url,
  description,
  publishedAt,
  title,
  source,
  isloggedin,
  handleLoginClick,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const handleBookmarkClick = () => setIsSaved((prev) => !prev);
  return (
    <article className="news-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
      >
        <img src={urlToImage} alt={title} className="news-card__img" />
      </a>

      <div className="news-card__bookmark-container">
        {!isloggedin && (
          <span className="news__card-warn">Sign in to save articles</span>
        )}

        <button
          className="news-card__bookmark"
          type="button"
          onClick={isloggedin ? handleBookmarkClick : handleLoginClick}
        >
          <img
            src={isSaved ? bookmarkClicked : bookmarkIcon}
            alt="Save article"
          />
        </button>
      </div>
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
