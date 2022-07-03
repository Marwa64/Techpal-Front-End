import { useState, useEffect } from 'react'
import NewsCard from '../../components/student/NewsCard'
import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import { connect } from 'react-redux'

const API_URL = 'https://newsapi.org/v2/everything?apiKey=4c815a8efe264f8ba724edc7b68523d6&language=en&sortBy=publishedAt'

const News = ({ currentTrack }) => {
  const [spinner, setSpinner] = useState(false)
  const [news, setNews] = useState([])
  const searchArticle = async (trackName) => {
    setSpinner(true)
    const response = await fetch(`${API_URL}&q=${trackName}`)
    const data = await response.json()
    setNews(data.articles)
    setSpinner(false)
  }
  useEffect(() => {
    searchArticle(currentTrack.name)
  }, [])

  return (

    <Layout spinner={spinner} pageName='News'>
      <PurpleBar title={`News Related To ${currentTrack.name}`} button={false} />
      <div className="container mt-5">
        <div className='row  ps-5 pb-2 pt-2 '>
          <h2 className='h4'>Recommended For You  </h2 >
        </div>
        <div className="row p-5 pt-0" >
        {
          news?.length > 0
            ? (
            <div className=' container'>
              { news.map((article, index) => <NewsCard key={`${article.auther}${index}`} article={article} onClick={() => { window.open(article.url, '_blank').focus() }} />) }
            </div>)
            : (
                <>
                  <p>There is no news for now </p>
                </>
              )
        }
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    currentTrack: state.currentTrack
  }
}

export default connect(mapStateToProps)(News)
