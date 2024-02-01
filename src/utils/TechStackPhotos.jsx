import csharp from '../static/tech-stacks/c-sharp.png';
import c from '../static/tech-stacks/c.png';
import css from '../static/tech-stacks/css.png'
import flask from '../static/tech-stacks/flask.png';
import html from '../static/tech-stacks/html.png';
import nodejs from '../static/tech-stacks/nodejs.png';
import postgres from '../static/tech-stacks/postgres.png';
import reactnative from '../static/tech-stacks/react-native.png';
import react from '../static/tech-stacks/react.png';
import supabase from '../static/tech-stacks/supabase.png';
import python from '../static/tech-stacks/python.png';
import javascript from '../static/tech-stacks/javascript.png';
import nextjs from '../static/tech-stacks/nextjs.png';
import tailwind from '../static/tech-stacks/tailwind.png';

export default function TechStackPhotos(stack) {  
    const techStackPhotos = {
        "c#": csharp,
        "c": c,
        "css": css,
        "flask": flask,
        "html": html,
        "node.js": nodejs,
        "postgresql": postgres,
        "react-native": reactnative,
        "react": react,
        "supabase": supabase,
        "python": python,
        "javascript": javascript,
        "nextjs": nextjs,
        "tailwindcss": tailwind,
    }

    return techStackPhotos[stack.toLowerCase()]

}