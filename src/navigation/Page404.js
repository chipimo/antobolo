
import React, { Component } from "react";
import { connect } from "react-redux";

class Page404 extends Component {
  render() {
    return (
      <div style={{
        height:"100%", 
        width:"100%",
        }}>
        404 error page not fund
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page404);
