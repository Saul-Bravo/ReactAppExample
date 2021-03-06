import React, { Component } from 'react';
import "./style/Badge.css";

class Badge extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="Badge m-5">
            <div className="Badge__header">
              <img src={this.props.hero_badge} alt="Header Background" />
            </div>
            <div className="Badge__userInfo container mt-5 mb-1">
                <div className="Badge__userImage">
                  <img src={this.props.profile_pic} alt="Profile" />
                </div>
                <h4 className="text-center mt-5">
                  {this.props.name} <i>{this.props.age}</i>
                </h4>
                <p className="text-center">
                  {this.props.city}
                </p>
            </div>
            <div className="Badge__info container pt-3">
              <div className="row">
                <div className="col">
                  <h4 className="text-center fw bold">{this.props.followers}</h4>
                  <p className="text-center">Followers</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">{this.props.likes}</h4>
                  <p className="text-center">Likes</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">{this.props.posts}</h4>
                  <p className="text-center">Posts</p>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Badge;