import React, { memo } from "react";
import { Form } from 'react-bootstrap';
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export function TForm({ defaultValues, children, onSubmit }) {
    const methods = useForm({ defaultValues });

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>{children}</Form>
        </FormProvider>
    );
}

const NestedInput = memo(
    // ({ name, register, rules, formState: { errors }, ...rest }) => (
    //     <div>
    // //         <Form.Control
    // //             className={!!errors && errors.length > 0 ? "is-invalid form-control" : "form-control"}
    // //             {...register(name,
    // //                 rules)} {...rest} />
    //     </div>
    // ),
    // (prevProps, nextProps) =>
    //     prevProps.formState.errors === nextProps.formState.errors

    ({ register, name, rules, formState: { errors }, ...rest }) => (
        <>
        <div><pre>{ errors.length }</pre></div>
            <Form.Control
                className={!!errors && errors.length > 0 ? "is-invalid form-control" : "form-control"}
                {...register(name,
                    rules)}
                {...rest} />

            {/* <Form.Control.Feedback type="invalid">
                Deve ser preenchido um nome.

                {errors.firstName && errors.v.type === "required" && (
                    <div className="error">You must enter your name</div>
                )}
                {errors.firstName && errors.firstName.type === "minLength" && (
                    <div className="error">Your name must be at least 2 characters</div>
                )}
            </Form.Control.Feedback> */}
        </>
    ),
    (prevProps, nextProps) =>
        prevProps.formState.errors === nextProps.formState.errors
);


export function TInput({ name, rules, ...rest }) {
    const methods = useFormContext();

    return <NestedInput {...methods} name={name} rules={rules} errors={methods.formState.errors} {...rest}/>;

    // return (
    //     <>


    //         {/* <Form.Control.Feedback type="invalid">
    //             {jsonParsedArray.map(value => (
    //                 <>{value}</>
    //             ))}
    //         </Form.Control.Feedback> */}
    //     </>
    // );
}

export function TSelect({ register, options, name, ...rest }) {
    return (
        <select name={name} ref={register} {...rest}>
            {options.map(value => (
                <option value={value}>{value}</option>
            ))}
        </select>
    );
}
