<template>
  <video ref="videoPlayer" />
</template>

<script>
import videojs from "video.js";

export default {
  name: "Video",
  data: () => ({
    player: null
  }),
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
            src:
              '//vjs.zencdn.net/v/oceans.mp4',
              type: 'video/mp4'
          }
        ],
    };
    this.player = videojs(this.$refs.videoPlayer, options, () => {

    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style>
@import "video.js/dist/video-js.min.css";
</style>