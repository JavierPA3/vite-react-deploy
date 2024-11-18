import './aboutme.css'
export const AboutMe = () => {
  return (
    <>
      <main className="mainPage">
        <section>
        <article className='titleArticle'>
        <img src="img/yo.jpg" alt="Javier Postigo Arévalo" className='mySelfPicture'/>
        <h1>Javier Postigo Arévalo</h1>
        </article>
        <hr/>
        <article className='navArticle'>
          <ul>
              <li><a href='#'>Linkedln</a></li>
              <li>603 40 40 45</li>
              <li><a href='#'>javier.postigo.arevalo@gmail.com</a></li>
              <li><a href='#'>Córdoba, Andalucía, España</a></li>
          </ul>
        </article>
        <hr/>
        <article className='aboutMeArticle'>
          <h2>Sobre mí</h2>
          <p>Soy un desarrollador de aplicaciones web <i><strong>resolutivo</strong></i> y <i><strong>ambicioso</strong></i>. Interesado en adentrarme al mundo laboral del desarrollo web. Busco encajar en un equipo talentoso que me pueda ayudar a crecer profesionalmente.</p>
          <p>Si esta interesado en conocer mis aspectos más personales, pulse <a href="#">aquí.</a></p>
        </article>
        <hr/>
        <article className='skillsArticle'>
          <h2>Aptitudes y skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Docker</li>
            <li>Git</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>Php</li>
            <li>Java</li>
          </ul>
          <ul>
            <li>Creativo</li>
            <li>Trabajo en equipo</li>
            <li>Proactivo</li>
            <li>Resolutivo</li>
            <li>Detallista</li>
            <li>Pensamiento analítico</li>
            <li>Organizado</li>
            <li>Autodidacta</li>
            <li>Comunicativo</li>
            <li>Empático</li>
          </ul>
        </article>
        </section>
      </main> 
    </>
  )
}
