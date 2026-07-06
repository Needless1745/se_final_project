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
    <article className="news__card">
      <img src={urlToImage} alt={title} className="news__card-img" />
      <div className="news__card-content">
        <p className="news__card-date">{publishedAt}</p>
        <h3 className="news__card-title">{title}</h3>
        <p className="news__card-desc">{description}</p>
        <p className="news__card-publisher">{source.name}</p>
      </div>
    </article>
  );
}
export default NewsCard;
