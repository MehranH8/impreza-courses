import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

import { FaPen, FaCode, FaCheckCircle, FaFacebook } from "react-icons/fa";
import { BsPeopleFill, BsTwitterX, BsLinkedin } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineRise } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";


const approach = () => {
    return (
        <div className="grid grid-cols-1 mb-36 lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
                <h3 className="text-[20px] font-bold mb-6">
                    ساختار سیستم آموزش
                </h3>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <ul className="list-disc mr-5 text-[15px] leading-10">
                    <li>تجزیه و تحلیل راه حل های ممکن</li>
                    <li>آموزش مهارت های عملی</li>
                    <li>مدیریت پروژه</li>
                    <li>تبلیغات و بازاریابی</li>
                </ul>
            </div>
            <div className="flex justify-end">
                <img className="rounded-3xl w-full lg:w-[90%] xl:w-[80%]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/tim-van-der-kuip-CPs2X8JYmS8-unsplash-1024x683.jpg" alt="about-img" />
            </div>
        </div>
    )
}
const start = () => {
    return (
        <div className="flex flex-col-reverse lg:grid mb-36 lg:grid-cols-2">
            <div className="flex justify-start">
                <img className="rounded-3xl w-full lg:w-[90%] xl:w-[80%]" src="https://impreza23.us-themes.com/wp-content/uploads/2013/06/thought-catalog-Nv-vx3kUR2A-unsplash-1024x683.jpg" alt="about-img" />
            </div>
            <div className="mb-12 lg:mb-0 content-center">
                <h3 className="text-[20px] font-bold mb-6">
                    شروع آسان
                </h3>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
            </div>
        </div>
    )
}

const practice = () => {
    return (
        <div className="grid grid-cols-1  mb-36 lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
                <h3 className="text-[20px] font-bold mb-6">
                    ساختار سیستم آموزش
                </h3>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                </p>

            </div>
            <div className="flex justify-end">
                <img className="rounded-3xl w-full lg:w-[90%] xl:w-[80%]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/you-x-ventures-Oalh2MojUuk-unsplash-1024x683.jpg" alt="about-img" />
            </div>
        </div>
    )
}


const result = () => {
    return (
        <div className="flex flex-col-reverse lg:grid mb-36 lg:grid-cols-2">
            <div className="flex justify-start">
                <img className="rounded-3xl w-full lg:w-[90%] xl:w-[80%]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/jonathan-borba-fNmUtZQwErM-unsplash-1024x683.jpg" alt="about-img" />
            </div>
            <div className="mb-12 lg:mb-0 content-center">
                <h3 className="text-[20px] font-bold mb-6">
                    شروع آسان
                </h3>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p className="mb-6 text-[15px] leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
            </div>
        </div>
    )
}

const About = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div>
            <div className=" mx-16 md:mx-32 mt-24">
                <div className=" w-full lg:w-[75%] xl:w-[65%] ">
                    <h3 className="text-[24px] sm:text-[40px] font-bold mb-4">
                        درباره دوره های آنلاین
                    </h3>
                    <p className="text-[16px] leading-8 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center mt-28 -mx-16 xl:mx-0">
                    <div>
                        <div>
                            <span className="text-mainblue text-[55px] font-bold">500+</span>
                        </div>
                        <div className="text-center">
                            <span className="text-[#35415b] text-[24px]">مدرس</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="text-mainblue text-[55px] font-bold">20,000</span>
                        </div>
                        <div className="text-center">
                            <span className="text-[#35415b] text-[24px]">دانشجو</span>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 mt-8 md:mt-0">
                        <div>
                            <span className="text-mainblue text-[55px] font-bold">800+</span>
                        </div>
                        <div className="text-center">
                            <span className="text-[#35415b] text-[24px]">دوره آموزشی</span>
                        </div>
                    </div>
                </div>
                <div className="mt-36 ">
                    <div className="mb-20 text-center sm:text-start">
                        <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">
                            درباره دوره های آنلاین
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
                        <div className="text-center">
                            <div className="flex">
                                <span className="mx-auto  bg-mainblue rounded-[50%] p-8 text-white text-[35px] mb-6">
                                    <FaPen />
                                </span>
                            </div>
                            <div>
                                <h4 className="text-[24px] font-semibold mb-2">
                                    طراحی
                                </h4>
                            </div>
                            <div>
                                <p className="text-[16px]">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex">
                                <span className="mx-auto  bg-mainblue rounded-[50%] p-8 text-white text-[35px] mb-6">
                                    <FaCode />
                                </span>
                            </div>
                            <div>
                                <h4 className="text-[24px] font-semibold mb-2">
                                    برنامه نویسی
                                </h4>
                            </div>
                            <div>
                                <p className="text-[16px]">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex">
                                <span className="mx-auto bg-mainblue rounded-[50%] p-8 text-white text-[35px] mb-6">
                                    <BiDollar />
                                </span>
                            </div>
                            <div>
                                <h4 className="text-[24px] font-semibold mb-2">
                                    بیزینس
                                </h4>
                            </div>
                            <div>
                                <p className="text-[16px]">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex">
                                <span className="mx-auto bg-mainblue rounded-[50%] p-8 text-white text-[35px] mb-6">
                                    <BsPeopleFill />
                                </span>
                            </div>
                            <div>
                                <h4 className="text-[24px] font-semibold mb-2">
                                    مارکتینگ
                                </h4>
                            </div>
                            <div>
                                <p className="text-[16px]">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-16 mt-36">
                        <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">
                            نحوه تدریس
                        </h3>
                    </div>
                    <Stepper
                        className="mb-20"
                        style={{ direction: "ltr" }}
                        activeStep={activeStep}
                        lineClassName="bg-[#e0e0e0]"
                        activeLineClassName="bg-[#e0e0e0]"
                    >
                        <Step activeClassName="bg-mainblue" completedClassName="bg-[#e0e0e0] text-black" className="h-20 w-20 cursor-pointer hover:bg-mainblue transition-colors duration-300 hover:text-white" onClick={() => setActiveStep(0)}>
                            رویکرد
                        </Step>
                        <Step activeClassName="bg-mainblue" completedClassName="bg-[#e0e0e0] text-black" className="h-20 w-20 cursor-pointer hover:bg-mainblue transition-colors duration-300 hover:text-white" onClick={() => setActiveStep(1)}>
                            شروع
                        </Step>
                        <Step activeClassName="bg-mainblue" completedClassName="bg-[#e0e0e0] text-black" className="h-20 w-20 cursor-pointer hover:bg-mainblue transition-colors duration-300 hover:text-white" onClick={() => setActiveStep(2)}>
                            تمرین
                        </Step>
                        <Step activeClassName="bg-mainblue" completedClassName="bg-[#e0e0e0] text-black" className="h-20 w-20 cursor-pointer hover:bg-mainblue transition-colors duration-300 hover:text-white" onClick={() => setActiveStep(3)}>
                            نتیجه
                        </Step>
                    </Stepper>

                    {activeStep == 0 ? approach() : (activeStep == 1 ? start() : (activeStep == 2 ? practice() : result()))}
                </div>

                <div className="mb-36">
                    <div className="mb-20 text-center sm:text-start">
                        <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">
                            دلایل محبوبیت ما
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12">
                        <div className="sm:flex gap-6">
                            <div className="flex">
                                <span className="bg-mainblue text-[40px] p-8 text-white rounded-[50%] mx-auto max-h-[7rem]">
                                    <GiGraduateCap />
                                </span>
                            </div>
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-3">
                                        مهارت های جدید
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <div className="flex">
                                <span className="bg-mainblue text-[40px] p-8 text-white rounded-[50%] mx-auto max-h-[7rem]">
                                    <FaCheckCircle />
                                </span>
                            </div>
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-3">
                                        مدرک معتبر
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <div className="flex">
                                <span className="bg-mainblue text-[40px] p-8 text-white rounded-[50%] mx-auto max-h-[7rem]">
                                    <AiOutlineRise />
                                </span>
                            </div>
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-3">
                                        دوره های جدید
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <div className="flex">
                                <span className="bg-mainblue text-[40px] p-8 text-white rounded-[50%] mx-auto max-h-[7rem]">
                                    <MdEngineering />
                                </span>
                            </div>
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-3">
                                        فرصت شغلی
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <div className="mb-20">
                        <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">
                            مدرسان ما
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12">
                        <div className="sm:flex gap-6">
                            <img className="mx-auto sm:mx-0 rounded-[50%] w-[150px] h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/caleb-lucas-6rRuAqtWt60-unsplash.jpg" alt="instrucor-img" />
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-4">
                                        امیر علی رضایی
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-6 justify-center sm:justify-start">
                                    <a href="#" className="bg-[#1e77f0] p-3 rounded-[50%] text-white text-[18px]">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="bg-black p-3 rounded-[50%] text-white text-[16px]">
                                        <BsTwitterX />
                                    </a>
                                    <a href="#" className="bg-[#0077b5] p-3 rounded-[50%] text-white text-[16px]">
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <img className="mx-auto sm:mx-0 rounded-[50%] w-[150px] h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg" alt="instrucor-img" />
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-4">
                                        زهرا محمدی
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-6 justify-center sm:justify-start">
                                    <a href="#" className="bg-[#1e77f0] p-3 rounded-[50%] text-white text-[18px]">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="bg-black p-3 rounded-[50%] text-white text-[16px]">
                                        <BsTwitterX />
                                    </a>
                                    <a href="#" className="bg-[#0077b5] p-3 rounded-[50%] text-white text-[16px]">
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <img className="mx-auto sm:mx-0 rounded-[50%] w-[150px] h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/spencer-russell-C7FB7H-sXJs-unsplash.jpg" alt="instrucor-img" />
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-4">
                                        محسن خواجویی
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-6 justify-center sm:justify-start">
                                    <a href="#" className="bg-[#1e77f0] p-3 rounded-[50%] text-white text-[18px]">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="bg-black p-3 rounded-[50%] text-white text-[16px]">
                                        <BsTwitterX />
                                    </a>
                                    <a href="#" className="bg-[#0077b5] p-3 rounded-[50%] text-white text-[16px]">
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex gap-6">
                            <img className="mx-auto sm:mx-0 rounded-[50%] w-[150px] h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg" alt="instrucor-img" />
                            <div className="text-center mt-6 sm:mt-0 sm:text-start">
                                <div>
                                    <h4 className="text-[18px] font-bold mb-4">
                                        آیدا فلاحی
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[14px]">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <div className="flex gap-2 mt-6 justify-center sm:justify-start">
                                    <a href="#" className="bg-[#1e77f0] p-3 rounded-[50%] text-white text-[18px]">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="bg-black p-3 rounded-[50%] text-white text-[16px]">
                                        <BsTwitterX />
                                    </a>
                                    <a href="#" className="bg-[#0077b5] p-3 rounded-[50%] text-white text-[16px]">
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*footer*/}
            <div className="relative h-[1200px] sm:h-[700px] md:h-[400px] bg-[#0f131f] mt-72 sm:mt-60">
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} className=" bg-mainblue absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]  w-[70%] rounded-md py-6 sm:py-14">
                    <div className="text-center mx-4 sm:mx-12 mb-10 lg:mb-0 lg:mx-8">
                        <h4 className="text-[32px] font-bold text-white mb-4">برای شروع آماده اید؟</h4>
                    </div>
                    <div className="text-center">
                        <button className="hover:bg-mainblue hover:text-white border-[3px] hover:border-white border-mainblue transition-colors duration-500 py-2 px-6 rounded-[3rem] text-[20px] text-[#35415b] bg-white" type="submit">
                            نمایش دوره ها
                        </button>
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

export default About