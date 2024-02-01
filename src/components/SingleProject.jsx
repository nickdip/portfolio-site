import React from 'react';
import { Link } from 'react-router-dom';
import TechStackPhotos from '../utils/TechStackPhotos'; 

// TODO: Change id for table row
export default function SingleProject({project}) {


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
    <>
    <div className="p-3">
        <Link to="/projects">Back</Link>
    </div>

    <table>
        <thead>
        <div className="flex flex-col items-center px-10 text-2xl">
            <tr>{project.name}</tr>
        </div>
        </thead>
        <tr key={project.name}>
            <div className="flex flex-col px-10">
                <td>
                <div  className="flex flex-row justify-center"> 
                    <img className="w-20 m-3" src={project.img}/>
                    <div className={`grid grid-cols-2`}>
                        {project.techstacks.map((stack, index) => (
                            <div className={`row-span-${index + 1}`}>
                                <img className="w-10 m-2 items-center" src={TechStackPhotos(stack)}/>
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
                <td>{project.description}</td>
            </div>
            </tr>
    </table>
    </>
  )
}
