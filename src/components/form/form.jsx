import { useForm } from 'react-hook-form';
import './form.scss'


const ContactForm = () => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onBlur' })

    const sendInfo = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }

    return (
        <form className='form' onSubmit={handleSubmit(sendInfo)}>
            <input type='text' placeholder='Full Name'
                {...register("fullName",
                    {
                        required: "Enter your Full Name",
                        pattern: {
                            value: /^[A-Z].*/,
                            message: "Start with a capital letter"
                        }
                    }
                )}
            />
            <span>{errors?.fullName?.message}</span>

            <input type='text' placeholder='Email'
                {...register("email",
                    {
                        required: "Enter your Email",
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Erorr Email"
                        }
                    })}
            />
            <span>{errors?.email?.message}</span>

            <input type='text' placeholder='Phone'
                {...register("phone", 
                {
                    required: "Enter your phone",
                    pattern: {
                        value: /^[0-9\-\+]{9,15}$/,
                        message: "Erorr Phone"
                    }
                }
                )}
            />
            <span>{errors?.phone?.message}</span>


            <textarea type='text' placeholder='Message' />

            <button>Submit</button>

        </form>
    )
}

export default ContactForm;