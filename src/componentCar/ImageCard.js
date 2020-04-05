import React from 'react'

class ImageCard extends React.Component {
  constructor (props) {
    super(props);

    this.state = { spans: 0 }

    this.imageRef = React.createRef();
  }

  componentDidMount () {
    this.imageRef.current.addEventListener(
      'load', this.setSpans
    )
    console.log(this.imageRef, 'image ref')
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10)

    this.setState({spans})
  }

  render () {
    const { urls,description } = this.props.image

    return (
      <div style={{gridRowEnd: `Span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    )
  }
 }

export default ImageCard;
