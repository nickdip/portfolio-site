import mePhoto from '../static/me-main.jpeg';
import React, { useState, useEffect} from 'react';
import Typewriter from './typewriter';
import Projects from './projects';
import Contact from './contact';


//TO DO: Remove third line animation

export default function Homepage({homeClicks, setHomeClicks, projects}) {


    const [ animation, setAnimation ] = useState([false, false]);


    useEffect(() => {

        setHomeClicks(homeClicks + 1);

    }, [])

    useEffect(() => {

        if (homeClicks > 1) {
            return
        }

        setTimeout(() => {
            setAnimation([true, false]);
        }
        , 1500);


        setTimeout(() => {
            setAnimation([true, true]);
        }
        , 3000);

    }, [homeClicks])


    function displayText(line, text) {

        if (homeClicks > 1) {
            return (<>{text}<br /><br /></>)
        }
        
        if (animation[line]) {
            return (
            <>
                <Typewriter text={text} speed={50} />
                <br />
            </>)
        }
        return <></>
    }
    return (
        <div id="home">
        <div className="flex mt-9 flex-col sm:flex-row flex-wrap p-10 justify-start items-center sm:items-start">
            <div className="flex-initial items-center w-2/5 max-h-full sm:w-1/5">
            <img className="object-contain" src={mePhoto} alt="logo" />
            </div>
            <div className="flex-1 p-5 text-3xl sm:text-6xl">
                <div className="">
                    {displayText(0, "Hi, I'm Nick.")}
                </div>
                <div className="">
                    {displayText(1, "I'm a London based, full-stack developer.")}
                </div>
            </div>  
        </div>
        <Projects projects={projects}></Projects>
        <Contact/>
        </div>
    )
}