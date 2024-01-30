import React from 'react';
import { Link } from 'react-router-dom';


// TODO: Change id for table row
export default function SingleProject({project}) {

    function showLinks(links) {
        if (!links) {
            return <>File Available on Request</>
        }

        return Object.keys(links).map((text) => {
            return <a className="m-2" href={links[text]}>{text}</a>
        })

    }
  return (
    <>
    <div className="p-3">
        <Link to="/projects">Back</Link>
    </div>
    <table>
        <tr key={project.name}>
            <div className="flex flex-col items-center">
                <td>{project.name}</td>
                <td className="flex flex-row">
                    {console.log(project)}
                    {showLinks(project.links)}
                </td>
                <td><img className="w-40" src={project.img}/></td>
                <td>{project.description}</td>
                </div>
            </tr>
    </table>
    </>
  )
}
