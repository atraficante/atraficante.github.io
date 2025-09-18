import React, { Component } from "react";
import video1 from "@site/static/assets/videoTest.mp4";

class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} muted="true" width="100%" autoPlay={true} loop={true}/>
      </div>
    );
  }
}
export default Video;