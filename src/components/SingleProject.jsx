import React, { useSate, useState } from 'react';
import { Link } from 'react-router-dom';
import TechStackPhotos from '../utils/TechStackPhotos'; 
import projectDescriptions from '../data/ProjectDescriptions';

export default function SingleProject({project, setDivScroll}) {

    
    useState(() => {
        const element = document.getElementById("top")
        element.scrollIntoView({ behavior: 'instant' });
        }, [])


    const descriptions = projectDescriptions();

    function showLinks(links) {
        if (!links) {
            return (
            <div className="m-3 font-medium">
            File Available on Request
            </div>
            )
        }

        return Object.keys(links).map((text) => {
            return (
            <a className="m-2 rounded-md p-2 my-5 border-2 font-medium" href={links[text]}>
                {text}
                </a>)
        })

    }
  return (
    <div className="mt-12">
        <div className="p-3 pt-9">
            <Link to="/" onClick={() => setDivScroll(project.id)}>Back</Link>
        </div>
    <table>
        <thead>
        <div className="flex flex-col items-center px-6 text-2xl">
            <tr>{project.name}</tr>
        </div>
        </thead>
        <tr key={project.name}>
            <div className="flex flex-col sm:px-10">
                <td>
                <div  className="flex flex-row justify-center flex-wrap"> 
                    <img className={`object-contain m-3 ${project.imgDimensions}`} src={project.img}/>
                    <div className={`grid grid-cols-2`}>
                        {project.techstacks.map((stack, index) => (
                            <div className={`row-span-${index + 1}`}>
                                <img className="max-h-10 m-2 items-center" src={TechStackPhotos(stack)}/>
                                <div className="p-2 break-words">
                                {stack}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </td>
                <td className="flex flex-row justify-center">
                    {showLinks(project.links)}  
                </td>
                <td className="p-3 mx-20 font-medium text-[17px] whitespace-pre-wrap mb-8">{descriptions[project.id] || project.description}</td>
            </div>
            </tr>
    </table>
    </div>
  )
}
