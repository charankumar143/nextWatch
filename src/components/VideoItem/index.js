import {Link} from 'react-router-dom'

import './index.css'

const VideoItem = props => {
  const {itemDetails} = props
  const {id, title, thumbnailUrl, publishedAt, viewsCount, name} = itemDetails
  return (
    <Link to={`/videos/${id}`}>
      <li className="video-item">
        <img src={thumbnailUrl} alt={name} className="thumbnail" />
        <p className="trending-heading">{title}</p>
        <p>{viewsCount}</p>
        <p>{publishedAt}</p>
      </li>
    </Link>
  )
}

export default VideoItem
