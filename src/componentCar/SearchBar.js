import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value.toUpperCase()
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const {searchSubmit} = this.props
    
    searchSubmit(this.state.term)
  }

  render () {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange = {this.onInputChange} 
            />
            <p>{this.state.term}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
