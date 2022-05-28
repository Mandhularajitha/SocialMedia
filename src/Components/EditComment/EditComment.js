import React from "react";
import "./EditComment.css";

export const EditComment = () => {
  return (
    <>
    
      <div className="share">

      <span class="close">&times;</span>
          
      <h2 className="edittext">EditComment</h2>
      
        <div className="share_upSide">
          
          <input type="text" placeholder="Share Your Moments" />
        </div>
        <hr />
        <div className="share_downSide">
          <div className="share_downSide_link">
            
            <span>Close</span>
          </div>
          <div className="share_downSide_link">
            <span>save</span>
          </div>
        </div>
      </div>
    </>
  );
};
