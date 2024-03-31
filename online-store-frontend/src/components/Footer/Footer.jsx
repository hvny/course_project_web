import "./Footer.css";

import vkLogo from "../../images/vkLogo.svg";
import tgLogo from "../../images/telegramLogo.svg";
import okLogo from "../../images/okLogo.svg";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { StyledEngineProvider } from "@mui/material";

export default function Footer() {
    return (
        <StyledEngineProvider injectFirst>
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__container footer__container_n-list">
                        <h3 className="footer__sn-list-title footer__title">Мы в социальных сетях</h3>
                        <ul className="footer__sn-list">
                            <li className="footer__sn-item">
                                <a href="https://vk.com/hlebnitca" 
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Ссылка на группу Вконтакте"
                                    title="Ссылка на группу Вконтакте"
                                    className="footer__link footer__sn-link"
                                >
                                    <img 
                                        src={vkLogo} 
                                        alt="логотип VK"
                                        className="footer__sn-logo footer__sn-logo_vk" 
                                    />
                                    <span className="footer__sn-text">Вконтакте</span>
                                </a>
                            </li>
                            <li className="footer__sn-item">
                                <a 
                                    href="https://t.me/hlebnitca_bakery" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    aria-label="Ссылка на Телеграм-канал"
                                    title="Ссылка на Телеграм-канал"
                                    className="footer__link footer__sn-link"
                                > 
                                    <img 
                                        src={tgLogo} 
                                        alt="логотип Telegram"
                                        className="footer__sn-logo footer__sn-logo_tg" 
                                    />
                                    <span className="footer__sn-text">Telegram</span>
                                </a>
                            </li>
                            <li className="footer__sn-item">
                                <a 
                                    href="https://ok.ru/hlebnitca" 
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Ссылка на сообщество в Одноклассниках"
                                    title="Ссылка на сообщество в Одноклассниках"
                                    className="footer__link footer__sn-link"
                                >
                                    <img 
                                        src={okLogo} 
                                        alt="логотип Одноклассники"
                                        className="footer__sn-logo footer__sn-logo_ok" 
                                    />
                                    <span className="footer__sn-text">Одноклассники</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__container footer__container_links">
                        <a 
                            href="http://hlebnitca.ru/about" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Ссылка на страницу 'О нас'"
                            title="Ссылка на страницу 'О нас'"
                            className="footer__title footer__link link" 
                        >
                            О нас
                        </a>
                    </div>
                    <div className="footer__container footer__container_work">
                        <a 
                            href="https://rabota.hlebnitca.ru/" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Ссылка на страницу 'Работа'"
                            title="Ссылка на страницу 'Работа'"
                            className="footer__title footer__link link" 
                        >
                            Работа
                        </a>
                    </div>
                    <div className="footer__container footer__container_phone">
                        <a 
                            href="tel:+78007707118" 
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Номер телефона"
                            title="Номер телефона"
                            className="footer__title footer__link link footer__link_phone" 
                        >
                            <LocalPhoneIcon className="footer__icon_phone" />8 800 770-71-18
                        </a>
                        <span className="footer__phone-span">Пн-Пт 8:00-17:00</span>
                    </div>
                </div>
            </footer>
        </StyledEngineProvider>
    );
}