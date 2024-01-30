import React from 'react'
import { Link } from 'react-router-dom';


export default function Projects({projects}) {

  return (
    <>
    <div className="px-10">
        <table>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} >
                <div className="flex flex-col items-center p-5">
                  <td><Link to={`/${project.id}`} className="font-bold underline">
                      {project.name}
                    </Link></td>
                  <td><img className="w-40" src={project.img}/></td>
                  <td>{project.description}</td>
                  <td>{project.link}</td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )
}
