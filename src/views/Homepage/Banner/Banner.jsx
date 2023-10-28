import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Box}>
        <h1 className={classes.Title}>
          ¡Hola!, ¡Bienvenidos! Mi nombre es Noemi Veliz
        </h1>
        <p className={classes.Description}>
          Estoy en busca de Nuevos retos que mejoren mi experiencia profesional
          y personal, aspiro mucho a conocer de nuevas tecnologías y de las
          tendencias del día a día.
        </p>
        <h4 className={classes.subtitulo}>Programadora de Software</h4>
        <p className={classes.Description2}>
          con conocimiento en Frontend y Backend
        </p>
      </div>
      <div className={classes.icons1}>
        <div className={classes.icons}>
          <FaCss3Alt color="blue" size={50} />
          <FaHtml5 color="orange" size={50} />
          <FaReact color=" skyblue" size={50} />
          <SiJavascript color="yellow" size={50} />
          <FaNodeJs color="green" size={50} />
          <SiExpress color="white" size={50} />
          <DiMongodb color="green" size={50} />
          <BiLogoGit color="red" size={50} />
        </div>
      </div>
      <div className={classes.botns1}>
        <div className={classes.Botns}>
          <h3>¿Estas pensando en un proyecto contactame?</h3>
          <a href="">
            <button className={classes.click}>Contactar </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
