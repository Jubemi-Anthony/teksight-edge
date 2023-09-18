import "./Particle.css";
import PARTICLE11 from './PARTICLE11'

const Particle1 = ({
    main,
    head_1,
    head_2,
    head_3,
    text_1,
    text_2,
    text_3,
    img_1,
    img_2,
    img_3
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
        </div>
    </section>
  )
}

export default Particle1