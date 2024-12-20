import Coursecard from "../Ui/Coursecard/Coursecard"
import { useState } from "react"


const Courses = () => {
    const [course, setcourse] = useState({
        data: [
                ["https://impreza23.us-themes.com/wp-content/uploads/2014/01/kevin-ku-w7ZyuGYNpRQ-unsplash-1024x768.jpg", "90", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/1"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/nordwood-themes-8LfE0Lywyak-unsplash-1024x683.jpg", "150", "12 ساعت", "مقدماتی", "دوره آموزش  طراحی دیجیتال ", "طراحی","/course/detail/6"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/eftakher-alam-i1VQZsU86ok-unsplash-1024x807.jpg", "90", "12 ساعت", "پیشرفته", "دوره آموزش  مارکتینگ", "مارکتینگ ","/course/detail/4"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/markus-spiske-70Rir5vB96U-unsplash-1024x683.jpg", "84", "12 ساعت", "مقدماتی", "دوره آموزش پایتون", "برنامه نویسی","/course/detail/2"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/kal-visuals-8OFRGUcJP2Y-unsplash-1024x683.jpg", "90", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا ", "برنامه نویسی","/course/detail/3"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/ux-store-jJT2r2n7lYA-unsplash-1024x683.jpg", "70", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/5"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/carlos-muza-hpjSkU2UYSU-unsplash-1024x730.jpg", "90", "12 ساعت", "مقدماتی", "دوره آموزش  ترید ", "بیزینس ","/course/detail/7"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/nathan-da-silva-FO7kUmBYVi0-unsplash-1024x1024.jpg", "100", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/8"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash-1024x683.jpg", "90", "20 ساعت", "مقدماتی", "دوره آموزش فروش محصولات", "مارکتینگ","/course/detail/9"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/jakob-owens-WUmb_eBrpjs-unsplash-1024x683.jpg ", "90", "24 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/10"],
                ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/nathan-da-silva-FO7kUmBYVi0-unsplash-1024x1024.jpg", "90", "12 ساعت", "مقدماتی", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/11"],
            ]
    })
    return (
        <div>
            {/*title*/}
            <div className="my-16 ">
                <h2 className="text-[28px] font-bold text-center">
                    دوره های آموزشی
                </h2>
            </div>
            {/*title*/}
            {/*course cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-10 xl:mx-16 gap-8">
                {course.data.map((item) => (
                    <Coursecard topcontainer="flex justify-center" container="w-full" img={item[0]} price={item[1]} time={item[2]} dificulty={item[3]} detail={item[4]} title={item[5]} link={item[6]}/>
                ))}
            </div>
            {/*course cards*/}
            {/*footer*/}
            <div className="relative py-6 bg-[#0f131f] mt-36">
                <div className="flex justify-between flex-col md:flex-row mx-8 md:mx-6 lg:mx-20 xl:mx-36">
                    <div >
 <div className="my-12">
                            <ul className="flex flex-col sm:flex-row gap-8">
                                <li className="text-[#8d9096] text-[20px]  ">کمپانی</li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/about">
                                        درباره ما
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/blog">
                                        بلاگ
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/about">
                                        قوانین پرداخت
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/about">
                                        قوانین سایت
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="my-12">
                            <ul className="flex flex-col sm:flex-row gap-8">
                                <li className="text-[#8d9096] text-[20px] ">دوره ها</li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/courses">
                                        طراحی
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/courses">
                                        برنامه نویسی
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/courses">
                                        مارکتینگ
                                    </Link>
                                </li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">
                                    <Link to="/courses">
                                        بیزینس
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="my-12">
                            <p className="text-[#646cfd] text-[20px] cursor-pointer hover:text-white transition-colors duration-300">info@example.com</p>
                        </div>
                        <div className="my-12">
                            <p className="text-[#646cfd] text-[20px] cursor-pointer hover:text-white transition-colors duration-300">
                                3212112212+
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*footer*/}
        </div>
    )
}

export default Courses