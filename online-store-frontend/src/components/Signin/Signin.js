import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import TextField from '@mui/material/TextField';
import ReusableForm from "../ReusableForm/ReusableForm";
import { Button, IconButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import phoneSchema from "../../utils/schemes/phoneNumberScheme";
import { joiResolver } from '@hookform/resolvers/joi';

export default function Signin() {
    const [step, setStep] = useState(1);
    const { handleSubmit, control, formState: { errors, isValid, isDirty }} = useForm({ 
        resolver: joiResolver(phoneSchema),
        mode: "onChange",
    });

    const [numberValue, setNumberValue] = useState()

    async function onSubmit(data) {
        console.log(data);
        // Send SMS with verification code to the provided phone number
        // ...
    
        setStep(2);
    };

    const onVerifyCodeSubmit = async (data) => {
        console.log(data);
        // Verify the SMS code and complete the registration
        // ...
    };

    return (
        step == 1 ?
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField 
                            id="outlined-basic" 
                            label="Номер телефона" 
                            variant="outlined" 
                            color="secondary"
                        />  
                    )}
                />
                
                <IconButton aria-label="NavigateNext" size="large" color="error" type="submit"> 
                    <span className="form__button-text">Дальше</span>
                    <NavigateNextIcon />
                </IconButton>
            </form>
        </>
        :
        <>
            <form>
                <TextField
                    id="outlined-basic" 
                    label="Код" 
                    variant="outlined" 
                    color="secondary"
                />
                <Button>Отправить</Button>
                
            </form>
        </>
    //     step == 1 ? 
    //     <ReusableForm
    //         onSubmit={handleSubmit(onSubmit)}
    //         defaultValues={{ name: '', phone: '' }}
    //     >
    //         <Controller
    //             name="name"
    //             control={control}
    //             defaultValue=""
    //             rules={{ required: 'Name is required' }}
    //             render={({ field }) => (
    //                 <input
    //                     {...field}
    //                     placeholder="Name"
    //                     onBlur={() => trigger('name')}
    //                 />
    //             )}
    //         />
    //         <ErrorMessage errors={errors} name="name" />

    //         <Controller
    //             name="phoneNumber"
    //             control={control}
    //             rules={{
    //                 // required: 'Введите номер телефонаа',
    //                 // pattern: {
    //                 //     value: /^\d{10}$/,
    //                 //     message: 'Invalid phone number',
    //                 // },
    //             }}
    //             render={({ field }) => (
    //                 <PhoneInput
    //                     {...field}
    //                     labels={ru}
    //                     required
    //                     placeholder="Ваш телефон"
    //                     defaultCountry="RU"
    //                     countryCallingCodeEditable={false}
    //                     value={numberValue}
    //                     onChange={setNumberValue} 
    //                     onBlur={() => trigger('phone')}
    //                     error={numberValue ? (isValidPhoneNumber(numberValue) ? undefined : 'Invalid phone number') : 'Phone number required'}
    //                 />
    //                 )}
    //         />
    //         <ErrorMessage errors={errors} name="phoneNumber" />
    //         <button type="submit">Send SMS</button>
    //     </ReusableForm>
    //     :
    //     <ReusableForm onSubmit={handleSubmit(onVerifyCodeSubmit)}>
    //         <Controller
    //             name="code"
    //             control={control}
    //             defaultValue=""
    //             rules={{ required: 'SMS code is required' }}
    //             render={({ field }) => (
    //                 <input
    //                 {...field}
    //                 placeholder="SMS code"
    //                 onBlur={() => trigger('code')}
    //                 />
    //             )}
    //         />
    //         <ErrorMessage errors={errors} name="code" />

    //         <button type="submit">Verify Code</button>
    //   </ReusableForm>
        
    );
}