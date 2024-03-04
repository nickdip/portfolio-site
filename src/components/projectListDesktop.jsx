import React from 'react'
import { Link } from 'react-router-dom';
import TechStackPhotos from '../utils/TechStackPhotos';
import Image from './image';

export default function ProjectListDesktop({projects}) {

  return (
    <table>
      <tbody>
        {projects.map((project) => (
          <tr id={project.id} key={ `${project.id}-d`} className="p-5 m-3 border-2 rounded-md flex flex-col justify-between">
            <td>
              <Link to={`/${project.id}`} className="text-2xl font-bold underline">
                {project.name}
              </Link>
            </td>
            <td className="flex w-100">
                {project.img ? <img className="max-w-40 m-2 object-scale-down" src={project.img}/> : null}
              <div className="flex flex-col">
                <div className="flex flex-wrap p-2 pl-5 pt-6 text-xl">
                  {project.description}
                </div>
                <div className="flex flex-wrap justify">
                  {project.techstacks.map((stack, index) => (
                    <img className="object-contain w-10 m-2" src={TechStackPhotos(stack)} key={index}/>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        
        ))}
      </tbody>

  </table>
  )
}
