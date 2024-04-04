import React from 'react';

function About() {
  const facebookClick = () => {
    window.open('https://www.facebook.com/Noteworthy', '_blank')
  }

  const youtubeClick = () => {
    window.open('https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA', '_blank')
  }

  const tiktokClick = () => {
    window.open('https://www.tiktok.com/@uc_noteworthy', '_blank')
  }

  const instagramClick = () => {
    window.open('https://www.instagram.com/cal_noteworthy/', '_blank')
  }

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>We're a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</p>
      <p>Since our founding in 2000, we've gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</p>
      <h2>Events</h2>
          <img src="image1.png" alt="Image 1" />
          <img src="image2.jpeg" alt="Image 2" />
          <img src="image3.png" alt="Image 3" />
      <h2>Hire Us</h2>
      <p>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this form. Then we’ll respond to you with a quote as soon as possible. In your email, let us know:
</p>
<ul>

<li>Who you are</li>
<li>The details of the event (where and when it’ll be)</li>
<li>What kind of songs you’d like us to perform and how long the performance should be</li>
</ul>
      <h2>Follow Us</h2>
      <button onClick={facebookClick} style={{border: 'none', background: 'transparent', padding: 0, margin: 0, width: '100px'}}>
                <img src="facebook.png" alt="facebook" />
            </button>

      <button onClick={youtubeClick} style={{border: 'none', background: 'transparent', padding: 0, margin: 0, width: '100px'}}>
                <img src="youtube.jpeg" alt="youtube" />
      </button>

      <button onClick={tiktokClick} style={{border: 'none', background: 'transparent', padding: 0, margin: 0, width: '100px'}}>
                <img src="tiktok.jpeg" alt="tiktok" />
            </button>

            <button onClick={instagramClick} style={{border: 'none', background: 'transparent', padding: 0, margin: 0, width: '100px'}}>
                <img src="instagram.png" alt="instagram" />
            </button>
    </div>
  );
}

export default About;