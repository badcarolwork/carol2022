
import { useEffect, useCallback } from 'react'
import './styles.scss';

const Home = () => {

    const animation = useCallback((el) => {
        const about = [
            "Front End Developer",
            "Web UI/UX Specialist",
            "Freelancer",
            "Reactjs user",
            "Cat person",
            "Food hunter",
            "Carol Chaw",
        ]

        let current = 0;


        setInterval(() => {
            el.classList.add('bounce-in-top');
            el.innerHTML = about[current === about.length ? current = 0 : current++];
            setTimeout(() => {
                el.classList.remove('bounce-in-top');
            }, 1300);
        }, 2000);


    }, []);

    useEffect(() => {
        const el = document.querySelector('.text');
        animation(el)
    }, []);



    return (
        <div className="section-container home-section w-full h-screen">
            <div className="container m-auto h-full">
                <h1 className="entry-title">
                    Hello! I'm<br />
                    <div className="text">Carol Chaw</div>
                </h1>
                <div className="animate-bounce flex">
                    <span>About Carol</span>
                    <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>

                </div>
            </div >
        </div >
    )
}

export default Home