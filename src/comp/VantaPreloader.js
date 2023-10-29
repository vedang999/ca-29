import React from "react";
import LoadScript from "react-load-script";

class VantaPreloader extends React.Component {
  handleScriptCreate = () => {
    // Triggered when the script is created
  };

  handleScriptError = () => {
    // Triggered if an error occurs while loading the script
  };

  handleScriptLoad = () => {
    // Triggered when the script is loaded successfully
    // Initialize Vanta.js here or keep it empty if not needed
  };

  render() {
    return (
      <>
        <LoadScript
          url="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <LoadScript
          url="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <LoadScript
          url="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <LoadScript
          url="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <LoadScript
          url="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
      </>
    );
  }
}

export default VantaPreloader;
