import Image from "next/image";
import facebook from './../public/Facebook.png';
import twitter from './../public/Twitter.png';
import instagram from './../public/Instagram.png';
import linkedin from './../public/Linkedin.png';


export default function Footer() {
    return (
        <div className="bg-black px-8 md:px-20 w-full">
            <div className="flex flex-col md:flex-row h-[180px] md:h-20 items-center md:justify-between border-t border-customGray">

                <div className="flex flex-col md:flex-row mt-5 md:mt-0">
                    <div className="flex items-center justify-center">
                        <div className="text-[12px] md:text-sm">Follow me:</div>
                        <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image src={facebook} className="cursor-pointer ml-5" alt="zoom" width={30} height={30} />
                        </a>
                        <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image src={twitter} className="cursor-pointer ml-2" alt="zoom" width={30} height={30} />
                        </a>
                        <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image src={instagram} className="cursor-pointer ml-2" alt="zoom" width={30} height={30} />
                        </a>
                        <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} className="cursor-pointer ml-2" alt="zoom" width={30} height={30} />
                        </a>
                    </div>

                    <div className="flex items-center justify-between h-5 mt-5 md:mt-0">
                        <div className="md:ml-10 text-[13px] md:text-sm"><span className="text-[10px] md:text-4xl font-extrabold">.</span> Terms of Service</div>
                        <div className="md:ml-10 text-[13px] md:text-sm"><span className="text-[10px] md:text-4xl font-extrabold">.</span> Privacy Policy</div>
                    </div>
                </div>

                <div className="flex mt-5 md:mt-0">
                    <div className="flex text-[11px] md:text-sm items-center justify-end">
                        © 2024 Think Bot Agency® All right reserved
                    </div>

                </div>

            </div>
        </div>
    );
}
