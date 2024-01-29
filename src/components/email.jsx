import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Email() {

    const form = useRef();

    const [ displayMessageSent, setDisplayMessageSent ] = useState("");

    const [ blockSeconds, setBlockSeconds ] = useState(5);

    const SendEmail = (e) => {

        if (!checkBlockSend()) {
            return
        }

        e.preventDefault();
    
        emailjs.sendForm('service_qfcdgs4', 'template_aelxa6k', form.current, 'ghrTrfgaUaGYHHRnH')
         .then(() => {
            setDisplayMessageSent("Your message has been sent.");
            blockSendMessage();
        })
         .catch((error) => {
                console.log(error.text);
                setDisplayMessageSent("There was an error sending your message. Please try again.");
            })
    };

    
    function checkBlockSend() {
        if (blockSeconds > 0)  {
            setDisplayMessageSent("You must wait " + blockSeconds + " seconds before sending another message.");
            return false
        }
        return true
    }

    function blockSendMessage() {

        let seconds = blockSeconds
        const interval = 1000

        while (seconds > 0) {

            setTimeout(() => {
                setBlockSeconds(blockSeconds - interval / 1000);
                seconds = seconds - 1000;
            }, interval)

        }

    }

    return (
        <div>
            <form className="flex flex-col items-center pt-5" ref={form} onSubmit={SendEmail}>
            <input className="border-2 border-blue-500 rounded-md p-2 m-3" placeholder="Name" type="text" name="user_name" size="40" />
            <input className="border-2 border-blue-500 rounded-md p-2 m-3" placeholder="Email" type="email" name="user_email" size="40" />
            <textarea className="border-2 border-blue-500 rounded-md p-2 m-3"  placeholder="Write message here..." name="message" rows="10" cols="50" />
            <input className="border-2 border-blue-500 rounded-md p-2 m-3" type="submit" value="Send" />
            {displayMessageSent}
            </form>
        </div>
      );
    };


