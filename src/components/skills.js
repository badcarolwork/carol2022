import skillData from '../datas/skillData'

const Skills = () => {

    return (
        <div className="section-container skill-section w-full h-screen">
            <div className="container m-auto h-full">
                <h1 className="entry-title mb-10">
                    Skills &amp; Experiences
                </h1>
                <div className="content-text">
                    <div className="skill-set">
                        My "teammate" that I work with when developing all the awesome front end projects.
                        <div className="skill-cloud flex flex-wrap w-9/12">
                            {
                                skillData.map((v, k) => {
                                    return <div className="flex items-start rounded-xl bg-white p-4 shadow-lg w-1/4 m-2" key={k}>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                            <i className={v.icon}></i>
                                        </div>

                                        <div className="ml-4">
                                            <h2 className="font-semibold">{v.name}</h2>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="resume mt-6 mb-7">
                        Feel free to visit my CV <a target="_blank" href="https://heytravellife.com/carolcc/resume/carolchaw.html" className="cv-link text-2xl">Here </a>
                        and connect on <a target="_blank" href="https://www.linkedin.com/in/carol-chaw-697502188/"><span className="text-2xl font-medium text-[#0072b1]"><i className=" fa-brands fa-linkedin"></i> LinkedIn.</span></a>
                    </div>

                    <div className="animate-bounce flex">
                        <span>Continue exploring my works </span>
                        <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Skills