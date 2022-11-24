import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../css/skills.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Skills() {

    const [skills, setSkills] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchSkills = async () => {
        await axios.get("https://personal-portfolio-mern.herokuapp.com/skills")
            .then(r => {
                setSkills(r.data)
                setLoading(false)
            }).catch(e => setSkills(null))
    }

    useEffect(() => {
        Aos.init()
        fetchSkills()
    }, [])

    return (
        <div className='container py-3' id='ss'>
            <div
                data-aos='fade-in'
                data-aos-duration="750"
                className='fs-3 text-center pb-3 text-light'
                style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "10px" }}
            >Skills</div>
            {loading ?
                <div className='text-light text-center'>Loading...</div> :
                <div className='d-flex flex-wrap justify-content-center'>
                    {skills.map((skill) => (
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                            id='skill'
                            className='border border-primary rounded text-center bg-light'
                            key={skill._id}
                        >
                            <img src={skill.img} alt={skill.skill} />
                            <hr />
                            <h5 className='text-center mt-3 text-danger fw-normal'>{skill.skill}</h5>
                        </div>
                    ))}
                </div>}
        </div>
    )
}

export default Skills