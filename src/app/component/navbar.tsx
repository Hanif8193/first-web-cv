import Link from "next/link";

export default function Navbar(){
  return(
    <div className="bg-green-500 px-5">
      <div className="flex px 2 justify-between w-full">
        {/* logo */}
        <div className="flex items-center font-bold text-white italic text-2xl justify-between w-full ">
          <h1> MH Services</h1>
          <div>
            {/*link*/}
            <div className="flex space-x-2">
          <Link href={"/"}> <li>Home</li></Link>
          <Link href={"/about"}> <li>About Us</li></Link>
          <Link href={"/contect"}> <li>Contact Us</li></Link>
          <Link href={"/cv"}> <li>CV</li></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

