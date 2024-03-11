import "./Profile.css";

import TextField from '@mui/material/TextField';

export default function Profile() {

    const MyTextField = () => {
        return (
          <TextField
            label="Имя"
            variant="outlined"
            inputProps={{
              style: {
                '&:focus': {
                  borderColor: '#ffffff', // цвет границы при фокусе
                },
              },
            }}
          />
        );
      };
    return (
        <section className="profile">
            <h1 className="profile__title title">Профиль</h1>
            <form className="profile__form">
                <h2 className="profile__subtitle">Ваши данные</h2>
                <MyTextField 
                    // id="outlined-basic" 
                    // label="Имя" 
                    />
            </form>
        </section>
    );
}