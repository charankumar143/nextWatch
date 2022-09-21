import {Component} from 'react'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import './index.css'

class VideoItemDetails extends Component {
  state = {videoDetails: {}}

  componentDidMount = () => {
    this.renderVideoDetails()
  }

  renderVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const result = data.video_details
    const fetchedData = {
      videoUrl: result.video_url,
      title: result.title,
    }
    this.setState({videoDetails: fetchedData})
  }

  render() {
    const {videoDetails} = this.state
    return (
      <div className="details-container">
        <ReactPlayer controls width="50%" url={videoDetails.videoUrl} />
        <p>{videoDetails.title}</p>
      </div>
    )
  }
}

export default VideoItemDetails
