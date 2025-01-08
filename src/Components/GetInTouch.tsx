import React, { useState, FormEvent } from 'react';
import emailjs from "emailjs-com";

interface TemplateParams {
    name: string;
    email: string;
    message: string;
}

const GetInTouch: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setResponseMessage('All fields are required. Please fill in the missing information.');
            return;
        }

        const serviceId = "service_reid616"; 
        const templateId = "template_4uf3l0s"; 
        const userId = "lh5bUkZiLpOPPWKzY"; 

        const templateParams: TemplateParams = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                console.log(result.text);
                setResponseMessage('Thank you for getting in touch! We will get back to you shortly.');
            }, (error) => {
                console.log(error.text);
                setResponseMessage('There was an error sending your message. Please try again.');
            });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className='h-screen flex justify-center items-center'>
            <div className=' bg-opacity-50 p-12 md:p-20 max-w-2xl w-full'>
                <h1 className='text-center text-gray-900 text-3xl font-semibold mb-6'>Get in Touch</h1>
                <div className="flex justify-center mb-6">
                    <hr className="border-2 border-white w-16 sm:w-24" />
                </div>
                <p className='text-center text-gray-900 text-lg mb-8'>
                    We would love to hear from you! Please fill out the form below, and we’ll get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-900 font-medium">Your Name</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg p-4 border text-gray-900 placeholder:text-[#d1d1d1] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            placeholder="Enter your name" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-900 font-medium">Your Email</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg p-4 border text-gray-900 placeholder:text-[#d1d1d1] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-gray-900 font-medium">Your Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full rounded-lg p-4 text-gray-900 border placeholder:text-[#d1d1d1] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            placeholder="Write your message" 
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 rounded-lg text-lg bg-red-800 text-white hover:bg-red-700 focus:ring-2 focus:ring-gray-900 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                {responseMessage && <p className="text-center text-grey-900 mt-4 text-sm">{responseMessage}</p>}
            </div>
        </section>
    );
}

export default GetInTouch;
