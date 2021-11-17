import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="top">
        <h1>Our Goal</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="bottom">
        <div className="item">
          <i class="far fa-lightbulb">Vission</i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="item">
          <i class="far fa-lightbulb">Mission</i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="item">
          <i class="far fa-lightbulb">Stratigies</i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
