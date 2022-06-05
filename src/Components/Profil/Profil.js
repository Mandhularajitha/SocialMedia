import React from "react";
import { CreatPost } from "../CreatPost/CreatPost";
import "./Profil.css";

export const Profil = () => {
  return (
    <>
      <div className="share_pro">
        <div className="share_upSide">
          <img
            src="https://images.emojiterra.com/google/android-pie/512px/1f469-1f3fb-1f4bc.png"
            alt="Profile"
          />
          <input type="text" placeholder="Share Your Moments" />
        </div>
        <hr />
        <div className="share_downSide">
          <div className="share_downSide_link">
            <i className="fas fa-photo-video photo-video-icon"></i>
            <span>Photo</span>
          </div>
          <div className="share_downSide_link">
            <span>Post</span>
          </div>
        </div>
      </div>
      <CreatPost/>
    </>
  );
};
