// import PhoneInput from 'react-phone-number-input/input';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


import ru from 'react-phone-number-input/locale/ru';
import { useState } from 'react';

export default function ReusableForm({ onSubmit, defaultValues, children }) {
    const { handleSubmit, control, formState: { errors }, setError, setValue, trigger, } = useForm({ defaultValues });
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
            <ErrorMessage errors={errors} />
        </form>
    );
}
/**
  const [value, setValue] = useState()
<PhoneInput
            labels={ru}
            placeholder="Ваш телефон"
            defaultCountry="RU"
            countryCallingCodeEditable={false}
            value={value}
            onChange={setValue} 
            // error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
        />
         */