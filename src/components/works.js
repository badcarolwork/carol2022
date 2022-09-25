import WorkData from '../datas/workData'

const Works = () => {

    return (
        <div className="section-container work-section w-full h-screen">
            <div className="container m-auto h-full">
                <h1 className="entry-title mb-10">
                    My Projects
                </h1>
                <div className="content-text">
                    <div className="skill-set">
                        <div className="skill-cloud flex flex-wrap">
                            {
                                WorkData.map((v, k) => {
                                    return <div className="p-4 md:w-1/5">
                                        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                            <img className="lg:h-25 md:h-25 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog" />
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{v.name}</h1>
                                                <p className="leading-relaxed mb-3">{v.brief}</p>
                                                <div className="flex items-center flex-wrap ">
                                                    <button className="bg-gradient-to-r bg-amber-600 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg">
                                                        {v.tech}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="animate-bounce flex">
                    <span>Feel like want to contact me? Check this out </span>
                    <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div >
        </div>

    )
}

export default Works