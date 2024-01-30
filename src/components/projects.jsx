import React from 'react'
import ProjectPhotos from '../utils/ProjectPhotos'

export default function Projects() {

  const projects = ProjectPhotos()

  console.log(projects[0])

  return (
    <>
        <div>Projects</div>
        <table>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} >
                <td>{project.name}</td>
                <td><img className="h-50" src={project.img}/></td>
                <td>{project.description}</td>
                <td>{project.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>

  )
}
