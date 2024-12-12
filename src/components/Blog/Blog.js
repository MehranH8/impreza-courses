import Blogcard from "../Ui/Blogcard/Blogcard"
import { useState } from "react"

const Blog = () => {
    const [blog, setblog] = useState({
        data: [
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/cowomen-pd5FVvQ9-aY-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/daniel-korpai-vHVfpi3h5xk-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/ux-indonesia-qC2n6RQU4Vw-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/brooke-cagle-uHVRvDr7pg-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"],
            ["https://impreza23.us-themes.com/wp-content/uploads/2020/08/john-schnobrich-2FPjlAyMQTA-unsplash-600x600.jpg", "چند نکته ی طلایی برای مارکتینگ", "4 سال پیش", "8/22/2020", "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"],

        ]
    })
    return (
        <div>
            {/*title*/}
            <div className="text-center mx-16 lg:mx-0 mt-16 mb-16">
                <h2 className="text-[30px] font-bold">بلاگ</h2>
            </div>
            {/*title*/}
            {/*blog cards*/}
            <div>
                {blog.data.map((item) => (
                    <Blogcard img={item[0]} title={item[1]} year={item[2]} date={item[3]} description={item[4]}/>
                ))}
            </div>
            {/*blog cards*/}
            {/*footer*/}
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
            {/*footer*/}
        </div>
    )
}


export default Blog