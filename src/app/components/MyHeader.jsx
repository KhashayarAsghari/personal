import style from "./MyHeader.module.css"


function MyHeader() {
    return (
        <header className={style.header}>
            <img className={style.header__image} src="./personal/self.jpg" alt="Khashayar Asghari picture"/>
            <nav className={style.navbar}>
                <a href="#" className={style.navbar__item}>Home</a>
                <a href="#" className={style.navbar__item}>Resume</a>
                <a href="#" className={style.navbar__item}>Projects</a>
                <a href="#" className={style.navbar__item}>Contact Me</a>
            </nav>
        </header>
    )
}

export default MyHeader;