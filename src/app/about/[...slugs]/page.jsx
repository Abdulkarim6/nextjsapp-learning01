import React from 'react';

const SlugsPage = async ({params}) => {
    const {slugs} = await params;
//   console.log(slugs);
  
    slugs.forEach(path => console.log(path));
    
    for(let path of slugs){
        // console.log(path);
        
    }
    return (
        <div>
            <h1>Slugs Page</h1>
        </div>
    );
};

export default SlugsPage;