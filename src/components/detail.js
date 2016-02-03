import React, { PropTypes, Component } from 'react';

export class VideoDetail extends Component {
  static propTypes = {
    selectedVideo: PropTypes.object
  };
  

  render() {
    console.log("details", this.props);
    if (!this.props.selectedVideo) {
      return <div>No video selected</div>;
    }

    const videoId = this.props.selectedVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.selectedVideo.snippet.title}</div>
          <div>{this.props.selectedVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;