import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SiGithub, SiTwitter, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si'

function Footer() {
    return (
        <>
            <div className='p-4 text-light text-center bg-dark' id='footer'>
                <div className='mb-2' id='in-page'>
                    <AnchorLink href='#home-container'>Home</AnchorLink>
                    <AnchorLink href='#ps'>Projects</AnchorLink>
                    <AnchorLink href='#ss'>Skills</AnchorLink>
                </div>
                <div className='mb-3' id='f-social'>
                    <a
                        href='https://github.com/Rudra1402'
                        rel='noreferrer'
                        target={'_blank'}
                    ><SiGithub title='Github' /></a>
                    <a
                        href='https://twitter.com/rp14ok'
                        rel='noreferrer'
                        target={'_blank'}
                    ><SiTwitter title='Twitter' /></a>
                    <a
                        href='https://www.linkedin.com/in/rudra-patel-22886b1ba/'
                        rel='noreferrer'
                        target={'_blank'}
                    ><SiLinkedin title='LinkedIn' /></a>
                    <a
                        href='mailto:rudra.19beitg096@gmail.com'
                        rel='noreferrer'
                        target={'_blank'}
                    ><SiGmail title='Gmail' /></a>
                    <a
                        href='https://www.instagram.com/rudra.patel.14'
                        rel='noreferrer'
                        target={'_blank'}
                    ><SiInstagram title='Instagram' /></a>
                </div>
                <div style={{ fontSize: "14px", color: "#fff6" }}>&copy; Copyright 2022 Rudra Patel. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Footer