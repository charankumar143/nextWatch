import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import Navbar from '../Navbar'

import Header from '../Header'

import VideoItem from '../VideoItem'

class Home extends Component {
  state = {userInput: '', videosList: []}

  componentDidMount = () => {
    this.renderHomeList()
  }

  renderHomeList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {userInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const fetchedData = data.videos.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      thumbnailUrl: eachItem.thumbnail_url,
      name: eachItem.channel.name,
      viewsCount: eachItem.view_count,
      publishedAt: eachItem.published_at,
    }))
    this.setState({videosList: fetchedData})
  }

  render() {
    const {videosList} = this.state
    return (
      <div>
        <Header />
        <div className="nav-items-container">
          <div>
            <Navbar />
          </div>

          <div className="items-list">
            <ul className="videos-container">
              {videosList.map(eachItem => (
                <VideoItem key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
