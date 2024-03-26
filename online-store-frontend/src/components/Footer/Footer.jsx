import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <figure className="footer__figure">
                    <figcaption className="footer__subtitle">Наши социальные сети</figcaption>
                    <ul className="footer__list">
                        <li><Link>Вконтакте</Link></li>
                        <li></li>
                        <li></li>
                    </ul>
                </figure>
            </div>
        </footer>
    );
}