import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"

const About = () => {
  return (
    <div className="my-16">
        <h1 className="text-black font-bold text-4xl">ABOUT US</h1>
        <div className="mt-10 grid gap-y-4 lg:grid-cols-3 lg:items-center lg:mt-0">  
            <img src={about1} alt="img1" className="relative h-full rounded-[35px] shadow-[10px_1px_8px_0px_rgba(0,0,0,0.2)] sm:w-1/2 sm:mx-auto lg:w-auto lg:h-[19rem]"/>
            <div className="h-full p-5 lg:p-3 bg-[#D9D9D9] rounded-[35px] sm:w-1/2 sm:mx-auto lg:w-auto lg:h-[13rem]  lg:col-span-2 lg:rounded-r-[35px] lg:rounded-l-none">
                <h4 className="mb-1 text-xl font-bold text-black">MACE</h4>
                <p className="text-sm text-black font-semibold text-justify">IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE Student Branch MACE (Student Branch Code: 32041) was established on November 17th, 1988 and is one of the largest student branches across the globe with over 500 student members. Every year numerous events are conducted by IEEE MACE SB to enhance the skills of our students and to equip them with the rapidly changing industry. IEEE MACE SB offers a Hardware Laboratory to the members to develop technical projects. IEEE conducts Training programmes, talks, professional awareness sessions, hackathons, industrial visits, debates, quizzes and workshops regularly.</p>
            </div>
        </div>

        <div className="mt-20 grid gap-y-4 lg:grid-cols-3 lg:items-center lg:mt-0">  
            <img src={about2} alt="img2" className="relative h-full rounded-[35px] shadow-[-10px_1px_8px_0px_rgba(0,0,0,0.2)] sm:w-1/2 sm:mx-auto lg:w-auto lg:h-[19rem] lg:order-last"/>
            <div className="h-full p-5 bg-[#D9D9D9] rounded-[35px] lg:h-[13rem] sm:w-1/2 sm:mx-auto lg:w-auto  lg:p-3 lg:col-span-2 lg:rounded-l-[35px] lg:rounded-r-none">
                <h4 className="mb-1 text-xl font-bold text-black">IEEE MACE SB</h4>
                <p className="text-sm text-black font-semibold text-justify">IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE Student Branch MACE (Student Branch Code: 32041) was established on November 17th, 1988 and is one of the largest student branches across the globe with over 500 student members. Every year numerous events are conducted by IEEE MACE SB to enhance the skills of our students and to equip them with the rapidly changing industry. IEEE MACE SB offers a Hardware Laboratory to the members to develop technical projects. IEEE conducts Training programmes, talks, professional awareness sessions, hackathons, industrial visits, debates, quizzes and workshops regularly.</p>
            </div>
        </div>

    </div>
  )
}
export default About