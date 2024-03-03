import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';



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
