import './ProfileCard.css';

function Card() {
  return (
    <article className='content-background'>
      <div className="container-p">
        <div className="image-block">
        </div>
        <div className="text-content">
          <h1>Kgomotso Mkhawane</h1>
          <h2>Software Developer</h2>
          <p>
            I am a Full Stack Software Developer Specialised in
                              React.js, Python Developer(Django), based in
                              Johannesburg, South Africa. I strive to develop
                              immersive and beautiful web applications
                              through carefully crafted code and user-cetric design.
          </p>
          <a href='#projects' className="button-btn">MY BEST WORK!</a>
        </div>
      </div>
    </article>
  );
}

export default Card;

