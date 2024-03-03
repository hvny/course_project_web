import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import PhoneInput from 'react-phone-number-input/input';
import ru from 'react-phone-number-input/locale/ru';
import ReusableForm from "../ReusableForm/ReusableForm";

  

         

export default function Signin() {
    const [step, setStep] = useState(1);
    const { handleSubmit, control, formState: { errors }, setError, setValue, trigger, } = useForm({
        defaultValues: {
            name: '',
            phone: '',
        },
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
        <ReusableForm
            onSubmit={handleSubmit(onSubmit)}
            defaultValues={{ name: '', phone: '' }}
        >
            <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                    <input
                        {...field}
                        placeholder="Name"
                        onBlur={() => trigger('name')}
                    />
                )}
            />
            <ErrorMessage errors={errors} name="name" />

            <Controller
                name="phoneNumber"
                control={control}
                rules={{
                    // required: 'Введите номер телефонаа',
                    // pattern: {
                    //     value: /^\d{10}$/,
                    //     message: 'Invalid phone number',
                    // },
                }}
                render={({ field }) => (
                    <PhoneInput
                        {...field}
                        labels={ru}
                        required
                        placeholder="Ваш телефон"
                        defaultCountry="RU"
                        countryCallingCodeEditable={false}
                        value={numberValue}
                        onChange={setNumberValue} 
                        onBlur={() => trigger('phone')}
                    />
                    )}
            />
            <ErrorMessage errors={errors} name="phoneNumber" />
            <button type="submit">Send SMS</button>
        </ReusableForm>
        :
        <ReusableForm onSubmit={handleSubmit(onVerifyCodeSubmit)}>
            <Controller
                name="code"
                control={control}
                defaultValue=""
                rules={{ required: 'SMS code is required' }}
                render={({ field }) => (
                    <input
                    {...field}
                    placeholder="SMS code"
                    onBlur={() => trigger('code')}
                    />
                )}
            />
            <ErrorMessage errors={errors} name="code" />

            <button type="submit">Verify Code</button>
      </ReusableForm>
        
    );
}