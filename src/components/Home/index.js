import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {
  logout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <div className="bg-cont">
        <div className="first-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="image-one"
          />
          <button type="button" className="button-class" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="second-cont">
          <h1 className="heading">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="image-tw0"
          />
        </div>
      </div>
    )
  }
}
export default Home
