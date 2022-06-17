import style from './ContactUs.module.css'
import imgLogo from './Pafi_Logo.png'

export const ContactUs = () => {
  return (
    <div className={style.container}>
      <div className={style.leftDiv}>
        <h2>Visitanos!</h2>
        <p>Av. Principal de Pirineos, en frente del Don Bosco</p>
        <p>Lunes a Sabado, de 8:00am a 6:30pm</p>
        <p>Siguenos en: <a  href="https://www.instagram.com/pafi_homemade/" target="_blank">Instagram</a></p>
      </div>
      <div className={style.rightDiv}>
        <img src={imgLogo} alt = 'Logo' height= '300px'></img>
      </div>
    </div>
  )
}