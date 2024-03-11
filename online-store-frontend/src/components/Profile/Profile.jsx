import "./Profile.css";

import TextField from '@mui/material/TextField';

export default function Profile() {
    return (
        <section className="profile">
            <h1 className="profile__title title">Профиль</h1>
            <form className="profile__form">
                <h2 className="profile__subtitle">Ваши данные</h2>
                <TextField id="outlined-basic" label="Имя" variant="outlined"/>
            </form>
        </section>
    );
}