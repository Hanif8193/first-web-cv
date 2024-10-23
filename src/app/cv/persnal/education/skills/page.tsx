import Link from "next/link";

export default function Skills(){
    return(
      <div>
        <h1>Skills</h1>
        <div>
          <ul>
            <Link href={"/cv"}> <li>CV</li></Link>
            <Link href={"/cv/persnal"}> <li>Persnal</li></Link>
            <Link href={"/cv/persnal/education"}> <li>Education</li></Link>
            
          </ul>

          <div className="bg-blue-500 flex justify-center items-center">
            <p>
            <label htmlFor="name"> Freelancing & Digital Marketing :  </label>
 <input type=" text"  id="name" name="Freelancing " className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />  
<label htmlFor="name"> Html & Css :  </label>
<input type=" text"  id="name" name="Html & Css" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />  
<label htmlFor="name"> Typescript :  </label>
<input type=" text"  id="name" name="Typescript" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> Next.js :  </label>
<input type=" text"  id="name" name="Next.js" className="bg-red-500 flex text-white"/>
<br />  
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />

</p>
         </div>
        </div>
      </div>
    )
  }
