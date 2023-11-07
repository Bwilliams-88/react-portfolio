/* eslint-disable react/prop-types */

       export default function Project(props) {   
            console.log(props);
            return ( 
              <>
              <br></br>
              <h1 className='h1'>{props.project.name}</h1>
                <h3 className='h3'>
                  <a href={props.project.imageURL} className='links'>
                    {props.project.urlName}
                  </a>
                </h3>
              <img width="75px" height="75px" src={props.project.image} className='img' /><br></br>
              </>
            );
          }