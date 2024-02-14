import "./home.css";
function Home() {
  return (
    <div className="col">
      <div className="main-title">
        <h2>
          Hi
          <img src="/Emoj.png" alt="emoje_icon" />,
        </h2>
        <h2> I’m Charles,</h2>
        <h2> Front-end Developer</h2>

        <p>
          I design and develop experiences that make people’s lives simpler
          through Web and Mobile apps.I work with FIgma , HTML5, CSS3,
          JavaScript, React, ReactNative and Flutter.
        </p>
        <div className="thum">
          <a href="#">HIRE ME</a>
          <a href="#">SEE MY PROJECTS</a>
        </div>
      </div>
      <div className="main-img">
        <img src="/user.png" alt="user_img" />
      </div>
    </div>
  );
}

export default Home;
