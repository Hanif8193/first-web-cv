import Link from "next/link";
export default function Persnal(){
    return(
        <div className="">
            <h1 className="text-center italic text-4xl font-bold text-purple-500">Personal information</h1>
            <div>
          <ul>
            <Link href={"/cv"}> <li>CV</li></Link>
            <Link href={"/cv/persnal/education"}> <li>Education</li></Link>
            <Link href={"/cv/persnal/education/skills"}> <li>Skills</li></Link>
          </ul>
          <div className="bg-blue-500 flex justify-center items-center">
            <p>
            <label htmlFor="name"> Name :  </label>
<input type=" text"  id="name" name="Name" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> Father Name :  </label>
<input type=" text"  id="name" name="Name" className=" bg-red-500 flex text-white"/>
<br />
<label htmlFor="no"> C.N.I.C No :  </label>
<input type=" no"  id="no" name="C.N.I.C. No" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> Tel # :  </label>
<input type="no"  id="no" name="Tel #" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="no"> Whatsapp # :  </label>
<input type=" no"  id="no"name="Whatsapp # " className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="email"> Email:  </label>
<input type=" text"  id="email" name="Email" className=" bg-red-500 flex text-white"/>
<br />
<label htmlFor="D.O.B"> D. O. B :  </label>
<input type="D.O.B"  id="D.O.B" name="D. O. BEmail" className=" bg-red-500 flex text-white"/>
<br />
<label htmlFor="mailing addres"> Mailing Address :  </label>
<input type=" text"  id="noling address" name="Mailing Address" className=" bg-red-500 flex text-white"/>
<br />
<label htmlFor="no"> Post Code # :  </label>
<input type=" no"  id="no"name="post code # " className="bg-red-500 flex text-white"/>
<br />
            </p>
          </div>
        
        </div>
        </div>
    )
}
