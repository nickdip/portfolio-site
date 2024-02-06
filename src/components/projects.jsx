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
                <tr id={project.id} key={project.id} >
                  <div className="flex flex-col items-center p-5 m-3 border-2 rounded-md">
                    <td><Link to={`/${project.id}`} className="text-2xl font-bold underline">
                        {project.name}
                      </Link></td>
                    <td>
                      <img className={`m-2 ${project.imgDimensionsThumbNail}`} src={project.img}/>
                      </td>
                    <td>
                      <div className="flex flex-row flex-wrap justify-center p-2">
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
