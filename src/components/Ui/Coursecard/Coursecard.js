import { Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Coursecard = (props) => {
    return (
        <Link to={props.link}>
            <div className={props.topcontainer}>
                <div className={`relative justify-self-center max-w-[558px] h-[340px] sm:h-[373px] transition-all duration-500 cursor-pointer group rounded-xl hover:shadow-blue-gray-500 shadow-2xl ${props.container}`}>
                    <img className="h-[340px] sm:h-[373px] rounded-xl w-full" src={props.img} alt="course-img" />
                    <div className="bg-darkcontainer h-[340px] sm:h-[373px] rounded-xl absolute w-full top-0 transition-all duration-500 group-hover:bg-transparent">
                        <div className="w-full max-w-[558px] group-hover:rounded-b-xl transition-all duration-500 group-hover:bg-white h-[45%] absolute bottom-0">
                            <h3 className=" mx-8 text-white relative top-[-10%]  bg-mainblue inline-block w-fit px-3 py-1 rounded-md text-[16px]">{props.title}</h3>
                            <p className=" mx-8 group-hover:text-[#35415b]  text-white text-[20px] font-bold mb-2">{props.detail}</p>
                            <span>
                                <Rating className="mx-8" readonly value={4} />
                            </span>
                            <div className=" mx-8 flex justify-between mb-12 mt-2">
                                <div>
                                    <span className="group-hover:text-[#35415b] transition-all duration-500  text-white text-[16px] ml-4">{props.dificulty}</span>
                                    <span className="group-hover:text-[#35415b] transition-all duration-500 text-white text-[16px]">{props.time}</span>
                                </div>
                                <div>
                                    <span className="text-[#35415b] transition-all duration-500 font-bold py-1 px-3 rounded-md text-[17px] bg-white">${props.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Coursecard