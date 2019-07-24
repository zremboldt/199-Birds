import React, { useEffect } from "react";

const Modal = ({ toggleModal, videoId, vidStart = 0, vidStop }) => {
  useEffect(() => {
    window.addEventListener("keydown", keyPress);
    // Return a cleanup function from useEffect so you don't have tons of listeners running for every modal you've opened.
    return () => window.removeEventListener("keydown", keyPress);
  }, []);

  const keyPress = e => {
    if (e.key === "Escape" || e.keyCode === 27) toggleModal();
  };

  const playerParams = [
    "autoplay=1", // Autoplays the video when loaded.
    "iv_load_policy=3", // Removes annotations.
    "loop=1", // Plays the video again after it's finished. Requires the next param "playlist...".
    `playlist=${videoId}`, // A required param if you want the video to loop.
    "modestbranding=1", // Removes the YouTube logo.
    "rel=0", // Only displays suggested videos from the current channel rather than all of YouTube.
    `start=${vidStart}`, // Point on timeline where video begins playing.
    `end=${vidStop}`, // Point on timeline where video stops playing.
  ];

  const playerParamsString = playerParams.join("&"); // Insert an ampersand between each param.

  return (
    <div className="modal">
      <div className="bgModal" onClick={toggleModal}></div>
      <div className="ctrVideo">
        <iframe
          className="video"
          title={videoId}
          src={`https://www.youtube.com/embed/${videoId}?${playerParamsString}`}
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
