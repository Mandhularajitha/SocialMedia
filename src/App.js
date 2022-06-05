import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Delet_Edit } from "./Components/CreatPost/Delet_Edit";
// import { EditComment } from "./Components/EditComment/EditComment";
import { Navbar } from "./Components/Navbar/Navbar";
import { SidebarLeft } from "./Components/SidebarLeft/SidebarLeft";
import { Profil } from "./Components/Profil/Profil";
import { CreatPost } from "./Components/CreatPost/CreatPost";
import { SidebarRight } from "./Components/SidebarRight/SidebarRight";
// import { BookMark } from "./Pages/BookMark/BookMark";
// import { Explore } from "./Pages/Explore/Explore";
import { Login } from "./Components/LoginSignup/Login";
import { Signup } from "./Components/LoginSignup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SidebarRight />
      <SidebarLeft />
      <div className="pages-routes">

        <Routes>
        
          <Route exact path="/" element={<Profil />} />
          <Route path="/" element={<CreatPost />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          {/* <Route path="/editcomment" element={<EditComment />} /> */}
          {/* <Route path="/delet_edit" element={<Delet_Edit />} /> */}
          {/* <Route exact path="/bookmark" element={<BookMark />} /> */}
          {/* <Route exact path="/explore" element={<Explore/>} /> */}
          
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
