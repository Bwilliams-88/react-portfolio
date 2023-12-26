/* eslint-disable no-unused-vars */
import React from 'react'

const Resume = () => {
    const resumeLink = '../dist/assets/Bwilliams_Resume.pdf';

    const developerProficiencies = [
        'Programming Languages: JavaScript, REACT',
        'Web Development: HTML, CSS, JavaScript, REACT',
        'Database Management: SQL, MongoDB, Insomnia',
        'Frameworks: Node.JS',
        'Version Control: Git',
    ];

    return  (
        <div>
            <h2>Resume</h2>
            <p>
                <a href={resumeLink} download>
                    Download My Resume
                </a>
            </p>
            <div>
                <h3>Developer Proficiencies:</h3>
                <ul>
                    {developerProficiencies.map((proficiency, index) =>(
                       <li key={index}>{proficiency}</li> 
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Resume;