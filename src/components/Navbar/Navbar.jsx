
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={classes.Container1}>
        <div className={classes.Container}>
          <div className={classes.Logo}>
            <div className={classes.Logo2}>
              <p>Nv</p>
            </div>
          </div>
          <div className={classes.Icons}>
            <div className={classes.Icons2}>
              <img src="./icons/home.png" alt="home" />
            </div>
            <div className={classes.Icons2}>
              <a href="https://www.linkedin.com/in/noemi-veliz/">
                <img src="./icons/linkedin.png" alt="linkdin" />
              </a>
            </div>
            <div className={classes.Icons2}>
              <a href="https://medium.com/@noemiveliz1512">
                <img src="./icons/medium.png" alt="Medium" />
              </a>
            </div>
            <div className={classes.Icons2}>
              <a href="https://github.com/noemivelizortiz/tww-cc-practices-node">
                <img src="./icons/github.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
