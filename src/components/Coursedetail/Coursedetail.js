import React from "react";
import { useLocation } from "react-router-dom";
import { MdInsights, MdGroups, MdDesignServices } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaCode, FaUserCheck } from "react-icons/fa6";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Coursecard from "../Ui/Coursecard/Coursecard"
import { useState } from "react"
import { Link } from "react-router-dom";


import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";



const Coursedetail = () => {
    const [course, setcourse] = useState({
        data: [
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/markus-spiske-70Rir5vB96U-unsplash-1024x683.jpg", "84", "12 ساعت", "مقدماتی", "دوره آموزش پایتون", "برنامه نویسی","/course/detail/2"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/kal-visuals-8OFRGUcJP2Y-unsplash-1024x683.jpg", "90", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا ", "برنامه نویسی","/course/detail/3"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/ux-store-jJT2r2n7lYA-unsplash-1024x683.jpg", "70", "12 ساعت", "پیشرفته", "دوره آموزش  جاوا اسکریپت", "برنامه نویسی","/course/detail/5"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2013/06/carlos-muza-hpjSkU2UYSU-unsplash-1024x730.jpg", "90", "12 ساعت", "مقدماتی", "دوره آموزش  ترید ", "بیزینس ","/course/detail/7"],
        ]
    })

    const [courseall, setcourseall] = useState({
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




    const caourseindex = useLocation().pathname

    const choosenindex = courseall.data.findIndex((id) => {
        if (id[6] == caourseindex) {
            return courseall
        }
    })





    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }


    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    console.log(open);
    return (
        <div>
            {/*title*/}
            <div className="relative">
                <img className="w-full h-[50vh]" src={courseall.data[choosenindex][0]} alt="container-img" />
                <div className="bg-darkcontainer2xl h-[50vh]  absolute w-full top-0 ">
                    <div className="lg:mx-56 md:mx-36 mt-12">
                        <div className="mb-6 text-center">
                                <span className=" text-white relative top-[-10%]  bg-mainblue inline-block w-fit px-3 py-1 rounded-md text-[14px]">
                                {courseall.data[choosenindex][5]}
                                </span>
                        </div>
                        <div className="mb-10 text-center ">
                            <h2 className="text-[28px] text-white font-bold">
                                {courseall.data[choosenindex][4]}
                            </h2>
                        </div>
                        <div className="flex gap-14 text-center justify-center">
                            <div className="">
                                <div className="text-[#727f9f] text-[14px] mb-2">تاریخ شروع</div>
                                <div className="text-white text-[16px]">22/08/2024</div>
                            </div>
                            <div className="">
                                <div className="text-[#727f9f] text-[14px] mb-2">مدت زمان</div>
                                <div className="text-white text-[16px]">{courseall.data[choosenindex][2]}</div>
                            </div>
                            <div className="">
                                <div className="text-[#727f9f] text-[14px] mb-2">سطح دوره</div>
                                <div className="text-white text-[16px]">
                                {courseall.data[choosenindex][3]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*title*/}
            <div className="mx-16 md:mx-32 mt-24 lg:grid lg:grid-cols-3">
                {/*detail*/}
                <div className="lg:col-span-2">
                    <div >
                        <h2 className="text-[28px] font-bold mb-8">
                            توضیحات
                        </h2>
                        <p className="text-[15px] leading-6 mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                        </p>
                        <p className="text-[15px] leading-6 mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <p className="text-[15px] leading-6 mb-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div>
                        <div className="mb-12 mt-32">
                            <h3 className="text-[28px] font-bold mb-8">آنچه می آموزید</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-x-16 lg:gap-x-8 md:grid-cols-2 lg:mx-0 lg:-mr-12 md:-mx-12 ">
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <MdInsights />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">تجزیه و تحلیل راه حل ها</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <FaRegClock />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">مدیریت بهره وری</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <MdGroups />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">کار تیمی و همکاری</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <FaCode />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">راه حل های برنامه نویسی</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <MdDesignServices />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">طراحی و گرافیک</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                            <div className="flex gap-6 mb-12">
                                <div className="my-auto">
                                    <span className="text-mainblue text-[40px]">
                                        <FaUserCheck />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-[22px] mb-2">راه حل های UX</h4>
                                    <p className="text-[14px] text-[#35415b]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*detail*/}
                {/*card*/}
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="sticky text-center hidden top-[15%] mb-24 pb-8 w-full xl:w-[80%] h-[265px] py-10 lg:flex flex-col justify-self-center ml-[-8rem]">
                    <div >
                        <div className="mb-6">
                            <h3 className="text-[28px] mx-2 text-[#35415b]">خرید دوره آموزشی</h3>
                        </div>
                        <div className="mb-6">
                            <span className="font-bold text-[#35415b] text-[30px]">
                            {courseall.data[choosenindex][1]} $
                            </span>
                        </div>
                        <div className="">
                            <button className="text-white hover:text-black bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-300 " type="button">خرید</button>
                        </div>
                    </div>
                </div>
                {/*card*/}
                {/*according detail*/}
                <div className="lg:col-span-2 mt-24">
                    <div>
                        <h3 className="text-[28px] font-bold mb-8">
                            توضیحات
                        </h3>
                    </div>
                    <Accordion className="w-full" open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader className={open == 1 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(1)}>شروع</AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody >
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader className={open == 2 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(2)}>
                            بررسی راه حل ها
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader className={open == 3 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(3)}>
                            راه حل منطقی
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader className={open == 4 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(4)}>
                            بررسی ui & ux
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader className={open == 5 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(5)}>
                            ساخت یک پروژه
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                        <AccordionHeader className={open == 6 ? "text-[24px] text-mainblue py-6 mb-4 hover:text-mainblue transition-colors duration-300" : "hover:text-mainblue transition-colors duration-300 text-[24px] text-[#35415b] py-6 mb-4"} onClick={() => handleOpen(6)}>
                            ارتقا دادن
                        </AccordionHeader>
                        <AccordionBody className="text-[16px] text-justify mb-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                </div>
                {/*according detail*/}
                {/*teacher*/}
                <div className="lg:col-span-2 mt-24 mb-24">
                    <div className="text-center sm:text-start">
                        <h3 className="text-[28px] font-bold mb-8">
                            مدرس دوره
                        </h3>
                    </div>
                    <div className="sm:flex gap-6">
                        <img className="mx-auto sm:mx-0 rounded-[50%] w-[150px] h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/caleb-lucas-6rRuAqtWt60-unsplash.jpg" alt="instructor-img" />
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
                </div>
                {/*teacher*/}
                {/*card*/}
                <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }} className="lg:hidden text-center justify-self-auto mb-24 pb-8 w-full h-[265px] py-10 flex flex-col ">
                    <div >
                        <div className="mb-6">
                            <h3 className="text-[28px] mx-2 text-[#35415b]">خرید دوره آموزشی</h3>
                        </div>
                        <div className="mb-6">
                            <span className="font-bold text-[#35415b] text-[30px]">90$</span>
                        </div>
                        <div className="">
                            <button className="text-white hover:text-black bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-300 " type="button">خرید</button>
                        </div>
                    </div>
                </div>
                {/*card*/}
            </div>
            {/*other courses*/}
            <div className="bg-[#f2f4f7] pt-32 pb-32">
                <div className="text-center">
                    <h3 className="text-[28px] font-bold mb-8">
                        دوره های مرتبط
                    </h3>
                    <p className="mb-12">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-10 xl:mx-6 gap-8 xl:gap-6">
                    {course.data.map((item) => (
                        <Coursecard topcontainer="flex justify-center" container="w-full" link={item[6]} img={item[0]} price={item[1]} time={item[2]} dificulty={item[3]} detail={item[4]} title={item[5]} />
                    ))}
                </div>
                <div className="text-center mt-24">
                    <button className="text-white hover:text-black bg-[#646cfd] lg:px-8 px-6 py-2 rounded-[4rem] text-[20px] mx-2 border-[3px] border-[#646cfd] hover:bg-transparent transition-colors duration-300 " type="button">
                        <Link to="/courses">
                            تمام دوره ها
                        </Link>
                    </button>
                </div>
            </div>
            {/*other courses*/}
            {/*footer */}
            <div className="relative py-6 bg-[#0f131f] ">
                <div className="flex justify-between flex-col md:flex-row mx-8 md:mx-6 lg:mx-20 xl:mx-36">
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

export default Coursedetail