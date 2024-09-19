import React, { useState } from 'react';
import './InteractiveButtonSection.css'; // CSS file for styling
import androidEnterpriseImg from '../assets/img1.jpeg'; // Image for Android Enterprise
import samsungKnoxImg from '../assets/img2.webp'; // Image for Samsung Knox
import noTouchImg from '../assets/img3.webp'; // Image for No Touch Onboarding
import remoteWorkImg from '../assets/img4.webp'; // Image for Completely Remote

const buttonData = [
  {
    id: 'androidEnterprise',
    label: 'Android Enterprise',
    contentHeader: 'Simplify enterprise management',
    contentText: 'Android Enterprise (AE) along with Hexnode enables the enterprise to exercise an extended level of control over every manageable aspect of a device. Support containerization, which creates a virtual container effectively separating work-related data from everything else.',
    imageSrc: androidEnterpriseImg,
  },
  {
    id: 'samsungKnox',
    label: 'Samsung Knox',
    contentHeader: 'Build your own metaphoric fort',
    contentText: 'The Knox platform is built into most Samsung phones, tablets and wearables. Hexnode along with Samsung Knox extends the granular management capabilities of the enterprise by ensuring that the device is protected throughout its lifecycle.Samsung with Knox allows its users to enroll with Hexnode UEM through Knox Mobile Enrollment (KME) KME lets the enterprise enroll configure and manage devices on the very first power on.Hexnode and Knox help the enterprise unlock some device management features that are beyond the capabilities of generic devices.',
    imageSrc: samsungKnoxImg,
  },
  {
    id: 'noTouchOnboarding',
    label: 'No Touch Onboarding',
    contentHeader: 'Get started with no hiccups',
    contentText: 'Android Zero Touch Enrollment provisions for simplified large-scale enterprise device deployment.Samsung Knox Enrollment is one among the most convenient options for the enterprise to enroll devices in bulk. Integration with Hexnode ensures deployment and configuration of Samsung devices that are completely secure from the hardware up.Hexnode helps your organization remain as flexible as possible with a plethora of enrollment options ranging from no-touch to QR code enrollments to ensure that the users can get to work with zero time delay.',
    imageSrc: noTouchImg,
  },
  {
    id: 'completelyRemote',
    label: 'Completely Remote',
    contentHeader: 'Manage devices handsfree',
    contentText: 'Support a wide range of management capabilities that can be configured on-to target devices without having to ever touch the device. Pre-configure device with corporate Wi-Fi, VPN and applications from the very first boot.With Hexnode’s remote view and remote control capabilities, the admin can remotely view and troubleshoot supported devices.Hexnode supports a completely cloud-based management console that can be accessed from any internet-enabled device, making remote management of the device simpler.',
    imageSrc: remoteWorkImg,
  },
];

const InteractiveButtonSection = () => {
  const [activeButton, setActiveButton] = useState(buttonData[0].id);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const activeContent = buttonData.find(item => item.id === activeButton);

  return (
    <section className="interactive-section">
      {/* Button Row */}
      <div className="button-container">
        {buttonData.map(button => (
          <button
            key={button.id}
            className={`interactive-button ${activeButton === button.id ? 'active' : ''}`}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="content-left">
          <h2>{activeContent.contentHeader}</h2>
          <p>{activeContent.contentText}</p>
        </div>
        <div className="content-right">
          <img src={activeContent.imageSrc} alt={activeContent.label} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveButtonSection;
