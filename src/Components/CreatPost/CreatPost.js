import React from "react";
import "./CreatPost.css";

export const CreatPost = () => {
  return (
    <>
      <div class="news_feed">
        <div class="news_feed_title">
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/woman-technologist_1f469-200d-1f4bb.png"
            alt="user"
          />
          <div class="news_feed_title_content">
            <p>Chandrika</p>
            <span>
               <i class="fas fa-globe-americas"></i>
            </span>
          </div>
        </div>
        <div class="news_feed_description">
        
          <div class="news_feed_description_title">
            <span>Comment Text</span>

            <p>
              “Wherever you go, no matter what the weather, always bring your
              own sunshine. The happiness of your life depends upon the quality
              of your thoughts
            </p>
          </div>
        </div>

        <div class="divider">
          <hr />
        </div>
        <div class="likes_buttons">
          <div class="likes_buttons_links">
            <i class="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div class="likes_buttons_links">
            <i class="far fa-comment-alt"></i>
            <span>Comment</span>
          </div>
          <div class="likes_buttons_links">
            <i class="fas fa-share"></i>
            <span>Share</span>
          </div>
          <div class="likes_buttons_links">
            <i class="fa-solid fa-bookmark"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};
