import { Link } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Blogdetail = () => {
    const [blog, setblog] = useState({
        data: [
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/cowomen-pd5FVvQ9-aY-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،","/blog/detail/1"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/daniel-korpai-vHVfpi3h5xk-unsplash-600x600.jpg", "بروزرسانی جدید جاوااسکریپت", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،","/blog/detail/2"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/ux-indonesia-qC2n6RQU4Vw-unsplash-600x600.jpg", "10 تریدر برتر سال 2024", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،","/blog/detail/3"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/brooke-cagle-uHVRvDr7pg-unsplash-600x600.jpg", "مهمترین اصول طراحی دیجیتال", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،","/blog/detail/4"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/john-schnobrich-2FPjlAyMQTA-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،","/blog/detail/5"],

        ]
    })


    const caourseindex = useLocation().pathname

    const choosenindex = blog.data.findIndex((id) => {
        if (id[5] == caourseindex) {
            return blog
        }
    })


    return (
        <div>
            <div className="mx-12 md:mx-16 lg:mx-24 xl:mx-36 mt-20">
                {/*title*/}
                <div className="mb-6">
                    <h2 className="text-[24px] font-bold">
                    {blog.data[choosenindex][1]}
                    </h2>
                </div>
                <div className="mb-6">
                    <span className="text-[14px] text-[#35315b] ml-8"> 4 سال پیش</span>
                    <span className="text-[14px] text-[#35315b]">8/22/2020</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-16">
                    <div>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p className="text-[14px] text-justify mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                    {/*title*/}
                    {/*side blogs*/}
                    <div>
                        <Link to="/blog">
                            <div className="grid grid-cols-2 gap-8 md:flex md:gap-4 lg:gap-8 items-center bg-[#f2f4f7] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[350px] mb-8">
                                <div className=" ">
                                    <blog-img className="max-w-[100%] max-h-[100%] md:max-w-[130px] md:max-h-[110px] lg:max-w-[180px] lg:max-h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/john-schnobrich-2FPjlAyMQTA-unsplash-1024x683.jpg" alt="blog-img" />
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold ml-2">مهمترین مهارت های برنامه نویس فرانت</h4>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blog">
                            <div className="grid grid-cols-2 gap-8 md:flex  md:gap-4 lg:gap-8 items-center bg-[#f2f4f7] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[350px] mb-8">
                                <div className="">
                                    <img className="max-w-[100%] max-h-[100%] md:max-w-[130px] md:max-h-[110px] lg:max-w-[180px] lg:max-h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/john-schnobrich-2FPjlAyMQTA-unsplash-1024x683.jpg" alt="blog-img" />
                                </div>
                                <div className="">
                                    <h4 className="text-[14px] font-bold ml-2">مهمترین مهارت های برنامه نویس فرانت</h4>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blog/detail">
                            <div className="grid grid-cols-2 gap-8 md:flex md:gap-4 lg:gap-8 items-center bg-[#f2f4f7] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[350px]">
                                <div className=" ">
                                    <img className="max-w-[100%] max-h-[100%] md:max-w-[130px] md:max-h-[110px] lg:max-w-[180px] lg:max-h-[150px]" src="https://impreza23.us-themes.com/wp-content/uploads/2020/08/john-schnobrich-2FPjlAyMQTA-unsplash-1024x683.jpg" alt="blog-img" />
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold ml-2">مهمترین مهارت های برنامه نویس فرانت</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*side blogs*/}
                </div>


            </div>
            {/*footers*/}
            <div className="relative py-6 bg-[#0f131f] mt-36">
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
            {/*footers*/}

        </div>
    )
}

export default Blogdetail