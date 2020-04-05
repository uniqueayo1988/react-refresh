import React from 'react';
import faker from 'faker';
import unsplash from './api/unsplash';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'
import SearchBar from './componentCar/SearchBar'
import ImageList from './componentCar/ImageList'

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: '',
    time: new Date().toLocaleTimeString(),
    images: []
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )

    // refreshes page after 1hour. Better to have as separate component
    // So only its component will refresh
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000 * 60 * 60)  
  }

  searchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
      params: { query: term }
    })

    console.log(response.data.results)
    this.setState({
      images: response.data.results
    })
  }

  render () {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Latitude: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="ui container comments">
          <div>{this.state.time}</div>

          <SearchBar searchSubmit={this.searchSubmit} />
          <ImageList images={this.state.images} />

          <ApprovalCard>
            <div>
              <h4>Warning</h4>
              Are you sure you want to do this?
            </div>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author='Sam' 
              timeAgo='Today at 4:45PM' 
              avatar={faker.image.avatar()} 
              content='Blog one' 
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail 
              author='Alex' 
              timeAgo='Today at 2:00AM' 
              avatar={faker.image.avatar()} 
              content='Blog two' 
            />
          </ApprovalCard>
          
          <div>
            <SeasonDisplay lat={this.state.lat} />
          </div>
        </div>
      )
    }

    return <Spinner message="Please, accept location request..."/>
    
  }
}

export default App;
