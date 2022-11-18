<template>
    <video class="video-styles" ref="videoPlayer" />
    <div>
        <p v-if = isVideoPlaying> Video is playing </p>
        <p v-else> Video is paused</p>
    </div>
</template>

<script>
import videojs from "video.js";
import { isVideoPlaying, setVideoPlayingState } from "@/stores/video";

export default {
  name: "Video",
  data: () => ({
    player: null,
    isVideoPlaying
  }),
  methods: {
    _setVideoPlayingState(videoPlayingState) {
        setVideoPlayingState(videoPlayingState)
    },
  },
  mounted() {
    const options = {
      autoplay: true,
      controls: true,
      muted: false,
      fluid: true,
      liveui: true,
      nativeControlsForTouch: true,
      responsive: true,
      restoreEl: true,
      poster: "//vjs.zencdn.net/v/oceans.png",
      sources: [
        {
          src: "//vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4",
        },
      ],
    };
    this.player = videojs(this.$refs.videoPlayer, options, () => {});
    this.player.on("play", () => {
        this._setVideoPlayingState(true)
    })
    this.player.on("pause", () => {
        this._setVideoPlayingState(false)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style>
@import "video.js/dist/video-js.min.css";

div{
    text-align: center;
    margin: 100px 0px;
    font-size: 25px;
    color:midnightblue
}

.video-styles{
    margin:auto;
    padding: 30px;
}
 
</style>