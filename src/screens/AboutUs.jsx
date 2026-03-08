import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const steps = [
    {
      title: "Mohammed Yusuf M",
      desc: "Founder of CCM | Video Editor",
      img: "Yusuf.jpg",
      link: "https://www.instagram.com/clipcraftor03/",
    },
    {
      title: "Mohamed Roshan Akthar M",
      desc: "Co-Founder of CCM | Web Developer",
      img: "Roshan.png",
      link: "https://www.instagram.com/itz_me._.rxsxhxn._/",
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

      <section className="section stats reveal" ref={ref}>
        <div className="container grid grid-3">
          <div className="stat">
            <h3>{inView && <CountUp end={8947} duration={2.5} />}</h3>
            <p>Videos Produced</p>
          </div>

          <div className="stat">
            <h3>{inView && <CountUp end={10} duration={2.5} />}M+</h3>
            <p>Views Generated</p>
          </div>

          <div className="stat">
            <h3>{inView && <CountUp end={19} duration={2.5} />}</h3>
            <p>Clients Worked With</p>
          </div>
        </div>
      </section>
    </>
  );
}
