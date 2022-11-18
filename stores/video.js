import {
    createStore
} from '@harlem/core';

const STATE = {
    isVideoPlaying: false,
};

const {
    state,
    getter,
    mutation
} = createStore('video', STATE);

const isVideoPlaying = getter('isVideoPlaying', state => state.isVideoPlaying);

const setVideoPlayingState = mutation('setVideoPlayingState', (state, isVideoPlaying) => {
    state.isVideoPlaying = isVideoPlaying;
});

export {
    isVideoPlaying,
    setVideoPlayingState
};
