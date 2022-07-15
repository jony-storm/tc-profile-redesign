import React, { FC, ReactElement } from 'react';
import ProfilePage from './pages/profile/Profile';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App: FC<any> = () : ReactElement => {
  return (
    <div className="App">
      <Navbar />
      <ProfilePage />
      <Footer />
    </div>
  );
}

export default App;
