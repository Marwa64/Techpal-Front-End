import { useState, useEffect } from 'react'
import NewsCard from '../../components/student/NewsCard'
import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { getNews } from '../../store/actions'

import { connect, useDispatch } from 'react-redux'

const News = ({ currentTrack, news }) => {
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)

  const searchArticle = async (trackName) => {
    setSpinner(true)
    await dispatch(getNews(trackName, 12))
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
              { news.map((article, index) => <NewsCard key={`${article.author}${index}`} article={article} onClick={() => { window.open(article.url, '_blank').focus() }} />) }
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
    currentTrack: state.currentTrack,
    news: state.news
  }
}

export default connect(mapStateToProps)(News)
