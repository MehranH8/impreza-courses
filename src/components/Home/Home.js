import { Carousel, Rating } from "@material-tailwind/react";
import home1 from "../../img/home1.jpg"
import home2 from "../../img/home2.jpg"
import home3 from "../../img/home3.jpg"
import Coursecard from "../Ui/Coursecard/Coursecard";
import { useState } from "react"



const Home = () => {
    const [course, setcourse] = useState({
        data: [
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash-1024x683.jpg", "90", "20 ساعت", "مقدماتی", "دوره آموزش  جاوا اسکریپت", "مارکتینگ"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/jakob-owens-WUmb_eBrpjs-unsplash-1024x683.jpg ", "90", "24 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/nathan-da-silva-FO7kUmBYVi0-unsplash-1024x1024.jpg", "90", "12 ساعت", "مقدماتی", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی"],
        ]
    })
    return (
        <div>
            <div className="relative">
                <Carousel

                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="hidden">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className="hidden"
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}

                    prevArrow={({ setActiveIndex, activeIndex, length }) => (
                        <div className="hidden">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className="hidden"
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}

                    nextArrow={({ setActiveIndex, activeIndex, length }) => (
                        <div className="hidden">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className="hidden"
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}


                    style={{ direction: "ltr" }} loop={true} autoplay={true} autoplayDelay="5000" className="h-[90vh] relative">
                    <img
                        src="https://impreza23.us-themes.com/wp-content/uploads/2013/06/austin-distel-TluMvvrZ57g-unsplash.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/you-x-ventures-Oalh2MojUuk-unsplash.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://impreza23.us-themes.com/wp-content/uploads/2013/06/thought-catalog-Nv-vx3kUR2A-unsplash.jpg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://impreza23.us-themes.com/wp-content/uploads/2013/06/kal-visuals-8OFRGUcJP2Y-unsplash.jpg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
                <div style={{ backgroundColor: "rgba(15,19,31,0.65)" }} className="absolute h-[90vh] w-full top-0 text-center">
                    <h2 className="text-white text-[24px] sm:text-[28px] mx-6 sm:mx-8 md:text-[35px] font-bold mt-36">
                        موسسه اموزش حرفه ای آنلاین
                    </h2>
                    <h2 className="text-white text-[24px] sm:text-[28px] mx-6 sm:mx-8 md:text-[35px] font-bold">ایمپرزا</h2>
                    <p className="text-white mt-12 mb-6 text-[18px]">
                        دوره های ما
                    </p>
                    <div className="">
                        <button className="text-white bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-500 " type="button">طراحی</button>
                        <button className="text-white bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-500 " type="button">برنامه نویسی</button>
                        <button className="text-white bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-500  mt-4 md:mt-0" type="button">بیزینس</button>
                        <button className="text-white bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-500  mt-4 md:mt-0" type="button">مارکتینگ</button>
                    </div>
                </div>
            </div>
            <div className="mb-44">
                <h2 className="text-[28px] font-bold text-center my-14">پر طرفدار ترین دوره ها</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-12">
                    {course.data.map((item) => (
                        item[2] == "12 ساعت" ? <Coursecard topcontainer="contents" container="lg:col-span-2 xl:col-span-1 w-full" img={item[0]} price={item[1]} time={item[2]} dificulty={item[3]} detail={item[4]} title={item[5]} /> : <Coursecard topcontainer="flex justify-center" img={item[0]} price={item[1]} time={item[2]} dificulty={item[3]} detail={item[4]} title={item[5]} />


                    ))}
                </div>
            </div>
            <div className=" flex flex-col-reverse lg:grid grid-cols-1  lg:grid-cols-3 mb-10 md:mb-24 lg:mb-36">
                <div className="col-span-2 flex justify-center lg:justify-start">
                    <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[560px] w-[90%]" src={home1} alt="home-img" />
                </div>
                <div className="lg:my-auto my-8 mx-8 sm:mx-10 lg:mx-0 lg:ml-20">
                    <h3 className="text-[26px] font-bold mb-4">
                        آنچه شما یاد میگیرید
                    </h3>
                    <p className="text-justify text-[16px] mb-3 xl:mb-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                    <button className="bg-[#e3e7f0] -mr-2 lg:mr-0 border-[3px] border-[#e3e7f0] transition-colors duration-500 hover:bg-white hover:border-mainblue px-5 py-2 text-[#35415b] rounded-3xl" type="button">دیدن دوره ها</button>
                </div>
            </div>
            <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 mb-10 md:mb-24 lg:mb-36">
                <div className="lg:my-auto my-8 mx-8 sm:mx-10 lg:mx-0 lg:mr-20">
                    <h3 className="text-[26px] font-bold mb-4">
                        فرصت های شما
                    </h3>
                    <p className="text-justify text-[16px] mb-3 xl:mb-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                    <button className="bg-[#e3e7f0] -mr-2 lg:mr-0 border-[3px] border-[#e3e7f0] transition-colors duration-500 hover:bg-white hover:border-mainblue px-5 py-2 text-[#35415b] rounded-3xl" type="button"> بیشتر</button>
                </div>
                <div className="col-span-2 flex justify-center lg:justify-end">
                    <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[560px] w-[90%]" src={home2} alt="home-img" />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-3 mb-10 md:mb-24 lg:mb-36">
                <div className="col-span-2 flex justify-center lg:justify-start">
                    <img style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="rounded-2xl xl:h-[560px] w-[90%]" src={home3} alt="home-img" />
                </div>
                <div className="lg:my-auto my-8 mx-8 sm:mx-10 lg:mx-0 lg:ml-20">
                    <h3 className="text-[26px] font-bold mb-4">
                        نحوه تدریس ما
                    </h3>
                    <p className="text-justify text-[16px] mb-3 xl:mb-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                    <button className="bg-[#e3e7f0] -mr-2 lg:mr-0 border-[3px] border-[#e3e7f0] transition-colors duration-500 hover:bg-white hover:border-mainblue px-5 py-2 text-[#35415b] rounded-3xl" type="button">اطلاعات بیشتر</button>
                </div>
            </div>
            {/*footer */}
            <div className="relative h-[1200px] sm:h-[700px] md:h-[400px] bg-[#0f131f] mt-72 sm:mt-60">
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} className=" bg-white grid absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] grid-cols-1 lg:grid-cols-2 w-[70%] rounded-md py-6 sm:py-14">
                    <div className=" mx-4 sm:mx-12 mb-10 lg:mb-0 lg:mx-8">
                        <h4 className="text-[28px] font-bold text-[#35415b] mb-4">پرسش سوال</h4>
                        <p className="text-[#35415b] text-[14px]">
                            پشتیبان های ما برای راهنمایی شما در اسرع وقت از طریق ایمیل با شما ارتباط خواهند گرفت تا بهترین دوره را انتخاب کنید.
                        </p>
                    </div>
                    <div className="mr-4 ml-4 sm:mr-12 sm:ml-12 lg:ml-8 lg:mr-8 xl:mr-28">
                        <form>
                            <div className="w-full mb-4">
                                <input className=" w-full border-[1px] border-gray-400 rounded-md text-[14px] p-2" placeholder="نام و نام خانوادگی" type="text" />
                            </div>
                            <div className="w-full gap-4 mb-10 sm:flex">
                                <input className="w-full mb-4 sm:mb-0 border-[1px] border-gray-400 rounded-md text-[14px] p-2" placeholder="شماره تلفن" type="text" />
                                <input className="w-full border-[1px] border-gray-400 rounded-md text-[14px] p-2" placeholder="ایمیل" type="email" />
                            </div>
                            <div>
                                <button className="bg-mainblue text-white border-2 border-mainblue transition-colors duration-500 py-2 px-6 rounded-[3rem] hover:text-[#35415b] hover:bg-white" type="submit">
                                    ارسال درخواست
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex relative bottom-[-20%] sm:bottom-[-40%] md:bottom-[-45%] justify-between flex-col md:flex-row mx-8 md:mx-6 lg:mx-20 xl:mx-36">
                    <div >
                        <div className="my-12">
                            <ul className="flex flex-col sm:flex-row gap-8">
                                <li className="text-[#8d9096] text-[20px]  ">کمپانی</li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">درباره ما</li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">بلاگ</li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">قوانین پرداخت</li>
                                <li className="text-[#646cfd] text-[18px]  cursor-pointer hover:text-white transition-colors duration-300">قوانین سایت</li>
                            </ul>
                        </div>
                        <div className="my-12">
                            <ul className="flex flex-col sm:flex-row gap-8">
                                <li className="text-[#8d9096] text-[20px] ">دوره ها</li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">طراحی</li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">برنامه نویسی</li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">مارکتینگ</li>
                                <li className="text-[#646cfd] text-[18px] cursor-pointer hover:text-white transition-colors duration-300">بیزینس</li>
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
        </div>
    )
}

export default Home