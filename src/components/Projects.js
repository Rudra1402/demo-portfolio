import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../css/skills.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Projects() {

    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Aos.init()
        const fetchProjects = async () => {
            await axios.get("https://personal-portfolio-mern.herokuapp.com/projects")
                .then(r => {
                    setProjects(r.data.reverse())
                    setLoading(false)
                }).catch(e => setProjects(null))
        }
        fetchProjects()
    }, [])

    return (
        <div className='container py-3' id='ps'>
            <div
                data-aos='fade-in'
                data-aos-duration="750"
                className='fs-3 text-light text-center pb-3'
                style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "10px" }}
            >Projects</div>
            {loading ?
                <div className='text-light text-center'>Loading...</div> :
                <div className='row mt-1 justify-content-center px-4'>
                    {projects.map((project, index) => (
                        <div
                            // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                            className="card col-3 m-3"
                            style={{ width: "415px" }}
                            key={project._id}
                            id='project'
                        >
                            <img className="card-img-top mt-2 p-3 rounded border border-primary" src={project.p_img} alt={project.p_img} style={{ maxWidth: "390px" }} />
                            {/* <hr className='my-0' /> */}
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-normal">{project.p_name}</h5>
                                <hr className='my-0' />
                                <div className='d-flex flex-wrap my-2 w-100'>{(project.skills).split(',').map((s, index) => (
                                    <div
                                        className='border border-danger px-2 py-1 m-1 rounded text-center'
                                        id='p-skill'
                                        key={index}
                                        style={{ maxWidth: "47%", fontSize: "14px" }}
                                    >{s}
                                    </div>
                                ))}</div>
                                <p className="card-text mb-3 mt-2">{project.p_des}</p>
                                <hr className='my-2' />
                                <p className='mb-0 text-muted' id='live'>Hosted on : {project.live}</p>
                                <div className='d-flex mt-3'>
                                    <a href={project.p_link} rel="noreferrer" className="btn btn-primary me-2" target={'_blank'}> Open Link</a>
                                    <a href={project.p_sc_link} className='btn btn-primary' target={'_blank'} rel="noreferrer">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Projects