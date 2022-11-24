import React, { useEffect } from 'react'
import '../css/home.css'
import img from '../images/wallp.JPG'
import bg from '../images/home_light.jpg'
import Typed from 'react-typed'
import { SiGithub, SiTwitter, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
    useEffect(() => {
        Aos.init()
        Aos.refresh()
    }, [])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' id='home-container'>
            <img src={bg} alt='' id='bg-img' />
            <div className='d-flex justify-content-center align-items-center' style={{ zIndex: 5 }} id='inner-home'>
                <img
                    data-aos="fade-right"
                    className='rounded-4 m-2'
                    src={img}
                    alt=''
                    style={{ height: "200px" }}
                />
                <div className='text-light m-4' id='home' data-aos="fade-left">
                    <div className='fs-1 mb-2' id='name'>Hi, I am <span className='text-warning'>Rudra Patel</span></div>
                    <div className='fs-3 my-2'>Web <Typed
                        className='text-warning'
                        strings={['Developer', 'Designer']}
                        typeSpeed={70}
                        backSpeed={35}
                        loop={true}
                        showCursor={true}
                        cursorChar='|'
                    /></div>
                    <div className='fs-5 my-2'>I am a Frontend and Full-Stack Developer.<br />I also Design Web pages.</div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                className='d-flex justify-content-center fs-3 my-3'
                id='social'
            >
                <a
                    href='https://github.com/Rudra1402'
                    rel='noreferrer'
                    target={'_blank'}
                >
                    <SiGithub className='logo' title='Github' />
                </a>
                <a
                    href='https://twitter.com/rp14ok'
                    rel='noreferrer'
                    target={'_blank'}
                >
                    <SiTwitter className='logo' title='Twitter' />
                </a>
                <a
                    href='https://www.linkedin.com/in/rudra-patel-22886b1ba/'
                    rel='noreferrer'
                    target={'_blank'}
                >
                    <SiLinkedin className='logo' title='Linkedin' />
                </a>
                <a
                    href='mailto:rudra.19beitg096@gmail.com'
                    rel='noreferrer'
                    target={'_blank'}
                >
                    <SiGmail className='logo' title='Mail' />
                </a>
                <a
                    href='https://www.instagram.com/rudra.patel.14'
                    rel='noreferrer'
                    target={'_blank'}
                >
                    <SiInstagram className='logo' title='Instagram' />
                </a>
            </div>
        </div>
    )
}

export default Home