import BackgroundParallax from "@/components/animation/BackgroundParallax";

export default function ParallaxBanner() {
  return (
    <div className="mxd-section padding-pre-manifest">
      <div className="mxd-container">
        <div className="mxd-divider">
          {/* <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image divider-image-10 parallax-img"
          /> */}
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dgbdcdqd1&public_id=Endpoint_Video_Compressed_jfvvui&autoplay=true&muted=true&loop=true"
            width="640"
            height="360"
            style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
