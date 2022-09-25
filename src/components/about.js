const About = () => {

    return (
        <div className="section-container about-section w-full h-screen">
            <div className="container m-auto h-full">
                <h1 className="entry-title">
                    About me
                </h1>
                <div className="content-text">
                    I'm a front end developer who love to learn, work and growth with the teams. <br />
                    Always looking for a chance to work and explore the latest tech of web development with all great people around.<br /><br />

                    In short, I am passion about coding, learning, travelling, food hunting, cat person and a Gooner! (If you know what that mean ) <br /><br />


                    <div className="animate-bounce flex">
                        <span>Check out my skills and experiences! </span>
                        <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default About