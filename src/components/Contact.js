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
                <p className="m-14 font-regular text-5xl text-midnight flex justify-center">Let's chat!</p>
                <div className="w-1/3 md:w-3/5 md:max-w-4xl bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                    {/* className="relative h-48 bg-ocean rounded-bl-3xl" */}
                    <div>
                        <svg id="visual" viewBox="0 0 900 102" width="900" height="102" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 66L12.5 64.2C25 62.3 50 58.7 75 53C100 47.3 125 39.7 150 41.3C175 43 200 54 225 58.8C250 63.7 275 62.3 300 55.5C325 48.7 350 36.3 375 34.3C400 32.3 425 40.7 450 46C475 51.3 500 53.7 525 50.7C550 47.7 575 39.3 600 36.2C625 33 650 35 675 40.8C700 46.7 725 56.3 750 60.5C775 64.7 800 63.3 825 58.7C850 54 875 46 887.5 42L900 38L900 0L887.5 0C875 0 850 0 825 0C800 0 775 0 750 0C725 0 700 0 675 0C650 0 625 0 600 0C575 0 550 0 525 0C500 0 475 0 450 0C425 0 400 0 375 0C350 0 325 0 300 0C275 0 250 0 225 0C200 0 175 0 150 0C125 0 100 0 75 0C50 0 25 0 12.5 0L0 0Z" fill="#006466" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
                        {/* 320x102 */}
                    </div>
                    <div>
                        {/* className="p-6 h-96 w-2/5 bg-ice rounded-xl shadow-xl flex justify-center mx-auto mb-16" */}
                        <div className="px-10 pt-4 pb-8 bg-white">
                            <form onSubmit={onSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col col-span-2 md:col-span-1 relative">
                                        <input
                                            type='text'
                                            name='from_name'
                                            placeholder=' '
                                            required
                                            className="peer h-10 w-full border-b-2 border-silver text-silver placeholder-transparent focus:outline-none focus:border-ocean"
                                            value={toSend.from_name}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-silver text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-silver peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-midnight  peer-focus:text-sm">Name</label>
                                    </div>
                                    <div className="flex flex-col col-span-2 md:col-span-1 relative">
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
                                    <div className="flex justify-center col-span-2 py-2">
                                        <button className="bg-ocean  p-4 block w-2/5 rounded-xl cursor-pointer text-center text-white text-xl" type='submit'>
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