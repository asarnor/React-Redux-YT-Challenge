import { REQUEST_VIDEOS, RECEIVE_VIDEOS, SELECT_VIDEO } from '../actions/videos';

const initialState = {
	isFetching: false,
    items: [],
    selectedVideo: null
};

var searchAndPlay = (state = initialState, action = {}) => {
    switch (action.type) {
    	case REQUEST_VIDEOS:
    		return {
                items: [],
    			isFetching: true,
                selectedVideo: null
    		};
    		
        case RECEIVE_VIDEOS:
            return Object.assign( {}, state, {
                items: action.items,
                isFetching: false,
            } );
        case SELECT_VIDEO:
            return Object.assign( {}, state, {
                selectedVideo: action.selectedVideo
            } );

        default:
            return state;
    }
};

export default searchAndPlay;