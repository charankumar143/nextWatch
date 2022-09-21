import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import Navbar from '../Navbar'

import Header from '../Header'

import GamingItem from '../GamingItem'

class Gaming extends Component {
  state = {videosList: []}

  componentDidMount = () => {
    this.renderHomeList()
  }

  renderHomeList = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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

      viewsCount: eachItem.view_count,
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

          <div>
            <ul className="videos-container">
              {videosList.map(eachItem => (
                <GamingItem key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Gaming
