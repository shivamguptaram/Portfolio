import React from 'react'
import img from './shiv.jpg'
import resume from './ShivamGuptaResume.pdf'
const NewHeader = () => {
    return (
        <>
        
  
      <main className="container">
        <div className="content">
          <div className="text">
            
            <h1>
              Hey, I'm a <br />
               <span>Full-Stack Developer</span> <br />

            </h1>
            <p>
              Hi, I'm Shivam, Full-Stack Developer from India. <br />
              I help brands turn their dreams into high quality products.
            </p>
            {/* <a href={resume} class="pulsingButton" download> <i class="fa fa-download"></i>Resume</a> */}

          </div>
          
          <div className="person">
              <div className="__BG">
                  <img src={img} alt="person " />
              </div>
          </div>
          
        </div>
        
        
  
      </main>
      </>
    )
}

export default NewHeader
