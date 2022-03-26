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
        <div id="contact" className="h-1/2">
            <p className="m-14 font-regular text-5xl flex justify-center">Let's chat!</p>
            <div className="p-6 h-96 w-3/5 border border-blue-700 rounded flex justify-center mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col border border-blue-700 rounded">
                            <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                name='from_name'
                                placeholder='Name'
                                value={toSend.from_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col border border-blue-700 rounded">
                            <label htmlFor="return email">Email</label>
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col col-span-2 border border-blue-700 rounded">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                value={toSend.to_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col col-span-2 border border-blue-700 rounded">
                            <label htmlFor="message">
                                <div className="flex align-items">
                                    Message
                                    {/* <span className="ml-auto opacity-75">Max. 500 characters</span> */}
                                </div>
                            </label>
                            {/* <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required /> */}
                            <input
                                type='text'
                                name='message'
                                placeholder='message'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-end py-4">
                            <button className="bg-blue-400 p-1 rounded-md cursor-pointer text-xl" type='submit'>
                                Submit
                            </button>
                        </div>

                    </div>

                </form>


            </div>
        </div>

    );
}

export default Contact;


//service id: