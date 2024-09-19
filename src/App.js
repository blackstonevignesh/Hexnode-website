import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import NewSection from './components/NewSection';
import CenteredImageSection from './components/CenteredImageSection';
import InteractiveButtonSection from './components/InteractiveButtonSection';
import AndroidFleetSection from './components/AndroidFleetSection';
import StartManagingSection from './components/StartManagingSection';
import ImageContentSection from './components/ImageContentSection';
import StartManagingAndroid from './components/StartManagingAndroid';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <NewSection />
      <CenteredImageSection />
      <InteractiveButtonSection />
      <AndroidFleetSection />
      <StartManagingSection />
      <ImageContentSection />
      <StartManagingAndroid />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
