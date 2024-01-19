const skillText = [
  {
    title: "React",
    desc: "리엑트를 이용하여 어느정도 까지 해봤고 어느 기술까지 써봤다"
  },
  {
    title: "Angular",
    desc: "Angular 1버전"
  },
  {
    title: "SQL (MSSQL, MySQL)",
    desc: "MSSQL 쿼리를 이용"
  }
]

function Skill() {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">나의 기술 <em> 스킬 </em></h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;