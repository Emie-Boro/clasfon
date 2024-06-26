import Header from "./Header";
import executives from './data/executives.json'
import '../styles/font.css';

const About = () =>{
    return (
        <>
            <div className="darkLayer slide-animation lg:h-96" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/aboutus.jpg)`,}}>
                <div className="px-16 py-5">
                    <Header />
                    <div className="container mx-auto py-8 text-center text-white">
                        <p className="text-white">Christian Lawyer's Fellowship of Nigeria</p>
                        <h1 className="text-6xl font-bold play-fair sm:text-3xl">About us</h1>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto bg-milk text-dark p-3">
                <div className="m-3">
                    <div className="flex flex-row justify-evenly sm:flex-col">
                        <div className="flex flex-col text-center">
                            <i class="bi bi-clock text-2xl text-lightRed"></i>
                            <h1 className="text-4xl sm:text-2xl">42</h1>
                            <h4 className="text-2xl sm:text-xl">Years</h4>
                        </div>
                        <div className="flex flex-col text-center my-3">
                            <i class="bi bi-people text-2xl text-lightRed"></i>
                            <h1 className="text-4xl sm:text-2xl">600+</h1>
                            <h4 className="text-2xl sm:text-xl">Members</h4>
                        </div>
                        <div className="flex flex-col text-center">
                            <i className="bi bi-geo-alt-fill text-2xl text-lightRed"></i>
                            <h1 className="text-4xl sm:text-2xl">50+</h1>
                            <h4 className="text-2xl sm:text-xl">Branches</h4>
                        </div>
                        <div className="flex flex-col text-center my-3">
                            <i className="bi bi-globe text-2xl text-lightRed"></i>
                            <h1 className="text-4xl sm:text-2xl">6</h1>
                            <h4 className="text-2xl sm:text-xl">Regions</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-5">
                <h1 className="font-bold text-3xl">CLASFON Executives</h1>
                <div className="flex flex-wrap justify-center">
                {executives.map((executive, index) => (
                    <div key={index} className="1/3 m-5">
                        <img src={executive.img} alt="" className="w-60 max-h-30 object-contain" />
                        <h3 className="bg-darkRed text-white p-2 uppercase sm:text-sm">{executive.name}</h3>
                        <h3 className="my-1 bg-milk text-dark p-2 sm:text-sm">{executive.position}</h3>
                        <h3 className="bg-milk text-dark h3 p-2 sm:text-sm">{executive.school}</h3>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
};

export default About;