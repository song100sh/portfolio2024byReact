import aboutImg from "../assets/image/about.jpeg";
const introText = {
  title: "Song Gandhi portfolio",
  desc: ["제발", "공부하자", "안하고 후회하지 말자"]
};

function Intro() {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1 className="intro__title">{introText.title}</h1>
        <div className="intro__lines" ariaHidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img"><img src={aboutImg} alt="어바웃" /></div>
        </div>
        <div className="intro__lines bottom" ariaHidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Intro;