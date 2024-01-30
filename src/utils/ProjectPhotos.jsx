
import projects from '../data/projects.json'
import connect4 from '../static/project-pics/connect4.png'
import grotto from '../static/project-pics/grotto.webp'
import nicksnews from '../static/project-pics/nicksnews.jpg'
import shufl from '../static/project-pics/shufl.jpg'
import wordhunt from '../static/project-pics/wordhunt.png'


export default function ProjectPhotos() {
   const photos = {"connect4": connect4, 
                  "grotto": grotto,
                  "nicksnews": nicksnews, 
                  "shufl": shufl,
                  "wordhunt": wordhunt}
   const output = []

   for (let project of projects) {
      const photo = photos[project.id]
      output.push({...project, img: photo})
   }

   return output
}