export default function AboutUs() {
  const steps = [
    {
      title: "Mohammed Yusuf M",
      desc: "Founder of Clipcraft Media | Editor",
      img: "Yusuf.jpg",
      link: "https://www.instagram.com/clipcraftor03?igsh=N3NpdnUyeXo3amZk",
    },
    {
      title: "Mohamed Roshan Akthar M",
      desc: "Co-Founder of Clipcraft Media",
      img: "Roshan.png",
      link: "https://www.instagram.com/itz_me._.rxsxhxn._?igsh=MXBldGFqa3AxcjFiZQ==",
    },
  ];

  return (
    <>
      <section className="section section-dark reveal" id="about">
        <div className="container">
          <h2 className="section-title">About us</h2>

          <div className="grid grid-2">
            {steps.map((s, i) => (
              <div
                className="card step-card founder-card"
                key={i}
                onClick={() => window.open(s.link, "_blank")}
              >
                <img src={s.img} alt={s.title} className="step-img" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats reveal">
        <div className="container grid grid-3">
          <div className="stat">
            <h3>50+</h3>
            <p>Videos Produced</p>
          </div>
          <div className="stat">
            <h3>10M+</h3>
            <p>Views Generated</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Clients Worked With</p>
          </div>
        </div>
      </section>
    </>
  );
}
