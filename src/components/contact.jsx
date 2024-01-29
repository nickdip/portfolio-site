import Email from './email';
import github from '../static/github.jpg';
import linkedin from '../static/linkedin.png';

export default function Contact() {
    

    return (
        <>
        <div className="flex justify-center text-2xl mb-3">
        Find me on GitHub and LinkedIn!
        </div>
        <div className="flex flex-row justify-center">
            <a className="m-2" href="https://www.github.com/nickdip">
                <img className="h-20" src={github} alt="GitHub" />
            </a>
            <a className="m-2" href="https://www.linkedin.com/in/nick-diplos-03635129/">
                <img className="h-20" src={linkedin} alt="Linkedin" />
            </a>
            
        </div>
        <Email></Email>
        </>
      );
    };



