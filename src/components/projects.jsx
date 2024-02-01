import React from 'react'
import { Link } from 'react-router-dom';
import TechStackPhotos from '../utils/TechStackPhotos';


export default function Projects({projects}) {

  if (!projects) return <></>

  return (
    <div id="projects">
      <div className="py-12 px-10">
        <h1 className="flex justify-center text-3xl font-bold">Explore Projects</h1>
          <table>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} >
                  <div className="flex flex-col items-center p-5 m-3 border-2 rounded-md">
                    <td><Link to={`/${project.id}`} className="font-bold underline">
                        {project.name}
                      </Link></td>
                    <td>
                      <img className="w-40 m-2" src={project.img}/>
                      </td>
                    <td>
                      <div className="flex flex-row justify-center p-2">
                        {console.log(project.techstacks)}
                        {project.techstacks.map((stack) => (
                          <img className="w-10 m-2" src={TechStackPhotos(stack)}/>
                        ))}
                        </div>
                    </td>
                    <td>
                      <div className="p-2">
                        {project.description}
                        </div>
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>

  )
}
