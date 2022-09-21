import {Link} from 'react-router-dom'

import './index.css'

const GamingItem = props => {
  const {itemDetails} = props
  const {id, thumbnailUrl, publishedAt, viewsCount, title} = itemDetails
  return (
    <Link to={`/videos/${id}`}>
      <li className="video-item">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        <h1 className="heading">{title}</h1>
        <p>{viewsCount}</p>
        <p>{publishedAt}</p>
      </li>
    </Link>
  )
}

export default GamingItem
