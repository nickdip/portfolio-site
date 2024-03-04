import React from 'react'

export default function Image({ url, className, key}) {
    const onLoad = () => {
        console.log("img loaded");
      };
      return <img src={url} className={className} onLoad={onLoad} key={key}/>;
}
