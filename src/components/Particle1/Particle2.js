import "./Particle.css";
import PARTICLE11 from './PARTICLE11'

const Particle2 = ({
    main,
    head_1,
    head_2,
    head_3,
    head_4,
    head_5,
    head_6,
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    text_6,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6
}) => {
  return (
    <section className="Particle1">
        <p className='main-particle'>{main}<span className="changed">.</span></p>
        <div className="sep-a">
            <PARTICLE11
                head={head_1}
                text={text_1}
                img={img_1}
                num={'01.'}
            />
            <PARTICLE11
                head={head_2}
                text={text_2}
                img={img_2}
                num={'02.'}
            />
            <PARTICLE11
                head={head_3}
                text={text_3}
                img={img_3}
                num={'03.'}
            />
            <PARTICLE11
                head={head_4}
                text={text_4}
                img={img_4}
                num={'04.'}
            />
            <PARTICLE11
                head={head_5}
                text={text_5}
                img={img_5}
                num={'05.'}
            />
            <PARTICLE11
                head={head_6}
                text={text_6}
                img={img_6}
                num={'06.'}
            />
        </div>
    </section>
  )
}

export default Particle2;