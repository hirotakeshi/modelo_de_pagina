
export default {
    mounted() {
      window.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
          const video = this.$refs.videoPlayer;
          video.paused ? video.play() : video.pause();
        }
      });
    },
  };