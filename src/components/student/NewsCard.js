const NewsCard = ({ article }) => {
  return (
    <div className="article  p-2  ">
      <div className="row   align-items-center">
        <p className=" fw-bold">{article.author ? article.author : 'The Author' }
          <span className=" fw-bolder"> . </span>
          <span className=" fw-lighter">{(article.publishedAt).substring(0, (article.publishedAt).indexOf('T'))}</span>
        </p>
      </div>
      <div className=" row   align-items-center  border-bottom   pb-3">
        <div className=" col-md-6">
          <h2 className=" h5  mb-2  ">{article.title}</h2>
          <p className="fw-light">{article.description} <a className="red-link" target="_blank" rel="noreferrer" href={article.url} >Read more...</a></p>
        </div>
        <div className=" col-md-6  ">
          <img className=" d-block m-auto" width={150} src={article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/400' } alt={article.title}/>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
