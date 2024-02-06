import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Email() {

    const form = useRef();

    const blockSeconds = useRef(10000);

    const blockMultipleSends = useRef(false);

    const [ displayMessageSent, setDisplayMessageSent ] = useState("");

    const [ blockSend, setBlockSend ] = useState(false);  

    const [ formDetails, setFormDetails ] = useState({"name": "", "email": "", "message": ""});

    useEffect(() => {
        if (blockSend) {
            blockSendTimer()
        }
    }, [blockSend])

    const blockSendTimer = () => {
        if (blockSend) {
            const interval = 1000;
    
            setTimeout(() => {
                blockSeconds.current -= interval
                if (blockSeconds.current  >= 0) blockSendTimer()
                else {
                    setBlockSend(false)
                    blockSeconds.current = 10000;
                }
            }, interval)
    
        }
    }

    const updateFormDetails = (e, label) => {
        setFormDetails({
            ...formDetails,
            [label]: e.target.value
        })
    }


    const SendEmail = (e) => {


        e.preventDefault();

        if (!checkBlockSend()) {
            return
        }

        blockMultipleSends.current = true;

        return emailjs.sendForm('service_qfcdgs4', 'template_aelxa6k', form.current, 'ghrTrfgaUaGYHHRnH')
         .then(() => {
            setDisplayMessageSent("Your message has been sent.");
            setFormDetails({"name": "", "email": "", "message": ""});
            blockMultipleSends.current = false;
            setBlockSend(true);
        })
         .catch((error) => {
                console.log(error.text);
                setDisplayMessageSent("There was an error sending your message. Please try again.");
            })

    };

    
    function checkBlockSend() {
        if (blockSend)  {
            setDisplayMessageSent("You must wait " + (blockSeconds.current / 1000) + " seconds before sending another message.");
            return false
        }
        else if (blockMultipleSends.current) {
            setDisplayMessageSent("Your message is being sent. Please wait.");
            return false
        }
        return true
    }


    return (
        <div>
            <form className="flex flex-col items-center pt-5" ref={form} onSubmit={SendEmail}>
            <input className="border-2 border-blue-500 rounded-md p-2 m-3 text-stone-800" placeholder="Name" type="text" name="user_name" size="30" onChange={(e) => updateFormDetails(e, "name")} value={formDetails["name"]}/>
            <input className="border-2 border-blue-500 rounded-md p-2 m-3 text-stone-800" placeholder="Email" type="email" name="user_email" size="30" onChange={(e) => updateFormDetails(e, "email")} value={formDetails["email"]}/>
            <textarea className="border-2 border-blue-500 rounded-md p-2 m-3 text-stone-800"  placeholder="Write message here..." name="message" rows="10" cols="35" onChange={(e) => updateFormDetails(e, "message")} value={formDetails["message"]} />
            {displayMessageSent}
            <input className="border-2 border-blue-500 rounded-md p-2 m-3" type="submit" value="Send" />
            </form>
        </div>
      );
    };


