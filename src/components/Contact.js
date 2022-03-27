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
        <div id="contact" className="min-h-screen bg-mint flex justify-center items-center">
            <div className="p-8 flex-1">
                <p className="m-14 font-regular text-5xl flex justify-center">Let's chat!</p>
                <div className="w-3/5 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                    {/* className="relative h-48 bg-ocean rounded-bl-3xl" */}
                    <div>
                        <svg id="visual" viewBox="0 0 320 102" width="320" height="102" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 33L6 32.2C12 31.3 24 29.7 35.8 29.3C47.7 29 59.3 30 71.2 37.7C83 45.3 95 59.7 106.8 66.3C118.7 73 130.3 72 142.2 64.5C154 57 166 43 177.8 42.8C189.7 42.7 201.3 56.3 213.2 62.5C225 68.7 237 67.3 248.8 65.5C260.7 63.7 272.3 61.3 284.2 58.2C296 55 308 51 314 49L320 47L320 0L314 0C308 0 296 0 284.2 0C272.3 0 260.7 0 248.8 0C237 0 225 0 213.2 0C201.3 0 189.7 0 177.8 0C166 0 154 0 142.2 0C130.3 0 118.7 0 106.8 0C95 0 83 0 71.2 0C59.3 0 47.7 0 35.8 0C24 0 12 0 6 0L0 0Z" fill="#006466" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
                        {/* 320x102 */}
                    </div>
                    <div>
                        {/* className="p-6 h-96 w-2/5 bg-ice rounded-xl shadow-xl flex justify-center mx-auto mb-16" */}
                        <div className="px-10 pt-4 pb-8 bg-white">
                            <form onSubmit={onSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col relative">
                                        <input
                                            type='text'
                                            name='from_name'
                                            placeholder=' '
                                            required
                                            className="peer h-10 w-full border-b-2 border-silver text-silver placeholder-transparent focus:outline-none focus:border-ocean"
                                            value={toSend.from_name}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-silver text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-silver peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-midnight peer-focus:text-sm">Name</label>
                                    </div>
                                    <div className="flex flex-col relative">
                                        <input
                                            type='text'
                                            name='reply_to'
                                            placeholder=' '
                                            required
                                            className="peer h-10 w-full border-b-2 border-silver text-silver placeholder-transparent focus:outline-none focus:border-ocean"
                                            value={toSend.reply_to}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="return email" className="absolute left-0 -top-3.5 text-silver text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-silver peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-midnight peer-focus:text-sm">Email</label>
                                    </div>
                                    <div className="flex flex-col col-span-2 relative">
                                        <input
                                            type='text'
                                            name='subject'
                                            placeholder=' '
                                            className="peer h-10 w-full border-b-2 border-silver text-silver placeholder-transparent focus:outline-none focus:border-ocean"
                                            value={toSend.to_name}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="subject" className="absolute left-0 -top-3.5 text-silver text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-silver peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-midnight peer-focus:text-sm">Subject</label>
                                    </div>
                                    <div className="flex flex-col col-span-2 relative">



                                        {/* <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md" required /> */}
                                        <textarea
                                            type='text'
                                            name='message'
                                            maxLength="500"
                                            rows="4"
                                            id="message"
                                            placeholder=' '
                                            required
                                            className="peer h-10 w-full border-b-2 border-silver text-silver placeholder-transparent focus:outline-none focus:border-ocean"
                                            value={toSend.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-silver text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-silver peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-midnight peer-focus:text-sm">Message</label>
                                    </div>
                                    <div className="flex justify-end py-2">
                                        <button className="bg-blue-400 p-1 rounded-md cursor-pointer text-xl" type='submit'>
                                            Submit
                                        </button>
                                    </div>

                                </div>

                            </form>


                        </div>
                    </div>

                </div>

            </div>


        </div>

    );
}

export default Contact;


//service id: