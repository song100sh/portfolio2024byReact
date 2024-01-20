const siteText = [
  {
    text: ["make", "site compliant with", "web standard"],
    title: "웹 표준을 준수한 사이트 제작",
    code: "https://www.naver.com",
    view: "www.google.com",
    info: ["site coding", "use stack : HTML5/CSS, CSS Variable, VITE"]
  },
  {
    text: ["make", "site compliant with", "react"],
    title: "리액트를 이용한 사이트 제작",
    code: "www.naver.com",
    view: "www.google.com",
    info: ["site coding", "use stack : HTML5/CSS, CSS Variable, React"]
  },
  {
    text: ["make", "site compliant with", "react"],
    title: "리액트를 이용한 사이트 제작",
    code: "www.naver.com",
    view: "www.google.com",
    info: ["site coding", "use stack : HTML5/CSS, CSS Variable, React"]
  },
  {
    text: ["make", "site compliant with", "react"],
    title: "리액트를 이용한 사이트 제작",
    code: "www.naver.com",
    view: "www.google.com",
    info: ["site coding", "use stack : HTML5/CSS, CSS Variable, React"]
  }
]


function Site() {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">Site coding <em> 작업물 </em></h2>
        <div className="site__wrap">
          {siteText.map((value, key) => (
            <article className={`site__item s${key + 1}`}>
              <span className="num">{key + 1}.</span>
              <div className="text">
                <div>{value.text[0]}</div>
                <div>{value.text[1]}</div>
                <div>{value.text[2]}</div>
              </div>
              <h3 className="title">{value.title}</h3>
              <div className="btn">
                <a href={value.code}>code</a>
                <a href={value.view}>view</a>
              </div>
              <div className="info">
                <span>{value.info[0]}</span>
                <span>{value.info[1]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Site;