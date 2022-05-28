import React from "react";
import "./SidebarRight.css";

export const SidebarRight = () => {
  return (
    <>
      <div className="content_right">
        <div className="content_right_inner">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/51494/person-emoji-clipart-md.png"
                  alt="user"
                />
                <span>John Doe</span>
              </a>
              <button className="followbutton">Follow</button>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/person-with-headscarf_1f9d5.png"
                  alt="user"
                />
                <span>Zorah Makey</span>
              </a>
              <button className="followbutton">Follow</button>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://hotemoji.com/images/dl/z/man-in-tuxedo-emoji-by-google.png"
                  alt="user"
                />
                <span>Kero Janre</span>
              </a>
              <button className="followbutton">Follow</button>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://www.emoji.com/wp-content/uploads/filebase/icons/emoji-icons-glossy-icons-person-icons-person-roles-man-in-tuxedo-fitz-3-72dpi-forPersonalUseOnly.png"
                  alt="user"
                />
                <span>Ube Yuri</span>
              </a>
              <button className="followbutton">Follow</button>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/woman-in-tuxedo_1f935-200d-2640-fe0f.png"
                  alt="user"
                />
                <span>Hosaa Mora</span>
              </a>
              <button className="followbutton">Follow</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
