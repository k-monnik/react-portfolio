import { useState } from "react";
import { send } from "emailjs-com";



function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_d5j8sxa',
            'template_kj0hxz6',
            toSend,
            'W9Jl6MjybRuIjcfcF'
        )

            .then((response) => {
                console.log('SUCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })

    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <div>
            <p>contact me here</p>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='from name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='to name'
                        value={toSend.to_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button className="bg-blue-400 p-1 rounded-md cursor-pointer" type='submit'>Submit</button>
                </form>

            </div>
        </div>

    );
}

export default Contact;


//service id: