import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SidebarLeft from "./components/sidebar_left/SidebarLeft";
import SidebarRight from "./components/sidebar_right/SidebarRight";
import Feed from "./components/feed/Feed"
import Form from "./components/form/Form";
import Post from "./components/post/Post";

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <SidebarLeft />
        <Feed> 
        <Form />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </Feed>
        <SidebarRight />
      </Main>
    </Layout>
  );
}

export default App;
