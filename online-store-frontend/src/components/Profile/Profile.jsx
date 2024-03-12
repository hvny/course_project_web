import "./Profile.css";

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function Profile() {
  const schema = [];
  const {register, hendleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver:  joiResolver(schema),
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
    }
  });

  return (
    <section className="profile">
        <h1 className="profile__title title">Профиль</h1>
        <form className="profile__form">
          <h2 className="profile__subtitle">Ваши данные</h2>
            <TextField 
                id="outlined-basic" 
                label="Имя" 
            />
        </form>
    </section>
  );
}