'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import styles from './contactUs.module.css'

export default function ContactUsPage() {

    const [form, setForm] = useState({name: '', email: '', contact: '', message: ''});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const handleForm = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

        // clear the error for this field as the user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Full name is required.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!form.contact.trim()) {
            newErrors.contact = "Contact number is required.";
        } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.contact)) {
            newErrors.contact = "Please enter a valid contact number.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message cannot be empty.";
        }

        setErrors(newErrors);

        // valid if there are no keys in newErrors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            setStatus('idle');
            return; // stop here, don't send the empty/invalid form
        }

        setStatus('loading');

        try {
            const res = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    contact: form.contact,
                    message: form.message,
                }),
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }

            setStatus('success');
            setForm({name: '', email: '', contact: '', message: ''});

        } catch (error) {
            setStatus('error');
        }
    }

  return (
    <main className='container d-flex flex-column flex-lg-row justify-content-center align-items-center text-white my-5 gap-4'>
        <div className='d-flex flex-column p-4 m-2'>
            <h2 className='font-fam'>Start Your Consultation</h2>
            <p>Speak with our legal team today for guidance, support, and clarity on your case.</p>
            <div className='py-4 d-flex flex-column gap-1'>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/locationicon.svg'
                        alt='location'
                        width={30}
                        height={30}
                    />
                    <span>Epuladaug, Itakam, Metro Manila</span>
                </div>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/phoneicon.svg'
                        alt='phone-number'
                        width={30}
                        height={30}
                    />
                    <span>(02) 8123 4567</span>
                </div>
                <div className='d-flex flex-row gap-3'>
                    <Image
                        src='/svgIcon/emailicon.svg'
                        alt='email'
                        width={30}
                        height={30}
                    />
                    <span>Lawfulfill@gmail.com</span>
                </div>                
            </div>
        </div>
        <form className={`d-flex flex-column p-4 m-2 rounded-3 gap-3 ${styles.contactForm}`} onSubmit={handleSubmit} noValidate>

            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
                </label>
                <input
                type="text"
                name="name" 
                value={form.name} 
                onChange={handleForm}
                placeholder="Firstname - Middlename - Lastname"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
                {errors.name && <span className="fst-italic text-warning small mt-1">{errors.name}</span>}
            </div>

            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
                </label>
                <input
                type="email"
                name="email" 
                value={form.email} 
                onChange={handleForm}
                placeholder="youremail@email.com"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
                {errors.email && <span className="fst-italic text-warning small mt-1">{errors.email}</span>}
            </div>

            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
                </label>
                <input
                type="tel"
                name="contact" 
                value={form.contact} 
                onChange={handleForm}
                placeholder="0000-000-0000"
                className={`rounded-1 px-3 py-2 ${styles.contactInput}`}
                />
                {errors.contact && <span className="fst-italic text-warning small mt-1">{errors.contact}</span>}
            </div>

            <div className='d-flex flex-column'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                placeholder="Type anything here"
                rows={5}
                name="message" 
                value={form.message} 
                onChange={handleForm}
                className={`rounded-1 px-3 py-2 ${styles.contactTextarea}`}
                />
                {errors.message && <span className="fst-italic text-warning small mt-1">{errors.message}</span>}
            </div>

            <button
                type="submit"
                className={`rounded-1 px-4 py-3 text-white ${styles.contactSubmit}`}
                disabled={status === "loading"}
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-success mt-3">
                ✔ Message sent successfully. We’ll get back to you soon.
                </p>
            )}

            {status === "error" && (
                <p className="text-warning mt-3">
                ⚠ Something went wrong. Please try again.
                </p>
            )}

        </form>
    </main>
  )
}