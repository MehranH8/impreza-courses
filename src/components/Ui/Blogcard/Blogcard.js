import { Link } from "react-router-dom"

const Blogcard = (props) => {
    return (
        <div className="flex  flex-col md:flex-row gap-10 mx-12 lg:w-[65%] xl:w-[60%] items-center lg:mx-auto mb-32 lg:mb-24">
            <Link to="/blog/detail">
                <div className="cursor-pointer">
                    <img className="rounded-[50%] max-w-[235px]" src={props.img} alt="blog-img" />
                </div>
            </Link>
            <div className="text-center md:text-right">
                <div className="mb-2 ">
                    <h3 className="text-[18px] font-bold">{props.title}</h3>
                </div>
                <div className="mb-2">
                    <span className="text-[12px] text-[#35415b] ml-4">{props.year}</span>
                    <span className="text-[12px] text-[#35415b]"> {props.date}</span>
                </div>
                <div>
                    <p className="text-[14px] text-justify">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogcard