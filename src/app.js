import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/list';
import VideoDetail from './components/detail';

import * as videosActions from './actions/videos';

export class App extends Component {
  static propTypes = {
    'videos': PropTypes.object.isRequired,
    'videosActions': PropTypes.object.isRequired
  };

  render() {
    const videoSearch = _.debounce((term) => { this.props.videosActions.fetchVideos(term); }, 300);
    const currentVideo = this.props.videos.selectedVideo
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail selectedVideo={currentVideo} />
        <VideoList
          onVideoSelect={ video => { this.props.videosActions.selectVideo(video); } }
          videos={this.props.videos} />
      </div>
    );
  }
}

export default connect(
  ( state ) => ({
    'videos': state.videos
  }),
  ( dispatch ) => ({
    'videosActions': bindActionCreators( videosActions, dispatch )
  })
)( App );