import React, { Component } from "react";
import MobileLayout from "./mobileView";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class RenderView extends Component {
  render() {
    return (
      <div style={{width:410}}>
        <BrowserView>
            <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
             <MobileLayout />
        </MobileView>
      </div>
    );
  }
}

export default RenderView;
