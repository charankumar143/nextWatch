import {Link} from 'react-router-dom'

import './index.css'

const TrendingItem = props => {
  const {itemDetails} = props
  const {id, thumbnailUrl, publishedAt, viewsCount, title} = itemDetails
  return (
    <Link to={`/videos/${id}`}>
      <li className="video-item">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        <p className="trending-heading">{title}</p>
        <p>{viewsCount}</p>
        <p>{publishedAt}</p>
      </li>
    </Link>
  )
}

export default TrendingItem
