var instance = new vidbg(
    ".body",
    {
        mp4: "website-bg.mp4", // URL or relative path to MP4 video
        webm: "website-bg.webm", // URL or relative path to webm video
        poster: "vid_poster.png", // URL or relative path to fallback image
        overlay: false, // Boolean to display the overlay or not
        overlayColor: "#000", // The overlay color as a HEX
        overlayAlpha: 0.3, // The overlay alpha. Think of this as the last integer in RGBA()
    },
    {
        autoplay: true,
        controls: false,
        loop: true,
        muted: true,
        playsInline: true,
    }
);