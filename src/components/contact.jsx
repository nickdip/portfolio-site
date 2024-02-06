import Email from './email';
import github from '../static/github.png';
import linkedin from '../static/linkedin.png';
import githubDark from '../static/github-dark.png';
import linkedinDark from '../static/linkedin-dark.png';
import { useTheme } from '../contexts/ThemeContext';

export default function Contact() {

    const { darkMode } = useTheme();
    

    return (
        <div id="contact">
        <h1 className="flex text-3xl justify-center">
            Contact
        </h1>
        <div className="pt-12 flex justify-center text-2xl mb-3">
        Find me on GitHub and LinkedIn!
        </div>
        <div className="flex flex-row justify-center">
            <a className="m-2" href="https://www.github.com/nickdip">
                {darkMode ? <img className="h-20" src={githubDark} alt="GitHub" /> : 
                <img className="h-20" src={github} alt="GitHub" />}
            </a>
            <a className="m-2" href="https://www.linkedin.com/in/nick-diplos-03635129/">
                {darkMode ? <img className="h-20" src={linkedinDark} alt="LinkedIn" /> :
                <img className="h-20" src={linkedin} alt="LinkedIn" />}
            </a>
            
        </div>
        <Email></Email>
        </div>
      );
    };



