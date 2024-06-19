function Footer(){
    return(
        <div className="bg-[#043872] py-5 text-white flex justify-center pt-10 interHere">
            <div className="w-[85%]">
                <h1 className="text-center text-[3rem] font-bold">Join Our Community</h1>
                <div className="py-5 flex flex-col items-center gap-3">
                    <h2 className="text-[1.5rem]">Sign Up for Our Newsletter</h2>
                    <p className="text-sm text-center w-[45%]">Stay connected with career tips, industry news exclusive content, and job alerts, Enter your email to join our vibrant community and receive updates directly in your inbox!</p>
                    <input type="email" placeholder="Enter your email" className="text-center rounded-md text-sm py-3 px-10 text-black" />
                    <button className="px-7 py-1 text-sm hover:scale-105 bg-[#509df9] rounded-md">Sign up</button>
                </div>
                <div className="flex gap-10 py-5">
                    <div className="w-[50%]">
                        <h4 className="uppercase headnav">Compass</h4>
                        <p>Take our career quiz to discover personalized recommendations, explore resources, and plan your prefessional journey.</p>
                    </div>
                    <div className="flex justify-between w-full px-5">
                        <div className="">
                            <h4 className="font-bold pb-3">Product</h4>
                            <p className="hover:underline cursor-pointer text-sm py-1">Overview</p>
                            <p className="hover:underline cursor-pointer text-sm py-1">Pricing</p>
                            <p className="hover:underline cursor-pointer text-sm py-1">Customer Stroies</p>
                        </div>
                        <div className="">
                            <h4 className="font-bold pb-3">Resources</h4>
                            <p className="hover:underline cursor-pointer text-sm py-1">Blog</p>
                            <p className="hover:underline cursor-pointer text-sm py-1">Guides & Tutorials</p>
                            <p className="hover:underline cursor-pointer text-sm py-1">Help center</p>
                        </div>
                        <div className="">
                            <h4 className="font-bold pb-3">Company</h4>
                            <p className="hover:underline cursor-pointer text-sm py-1">About Us</p>
                            <p className="hover:underline cursor-pointer text-sm py-1">Careers</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="flex gap-10 py-2 text-sm">
                    <p className="hover:underline cursor-pointer">English</p>
                    <p className="hover:underline cursor-pointer">Terms & Privacy</p>
                    <p className="hover:underline cursor-pointer">Security</p>
                    <p className="hover:underline cursor-pointer">Status</p>
                    <p className="hover:underline cursor-pointer">@2024 Compass LLC.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;