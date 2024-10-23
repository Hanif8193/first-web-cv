import Link from "next/link";

export default function Education(){
    return(
      <div className=" ">
        <h1 className="text-center text-4xl font-bold text-4xl text-blue-500 italic">Education</h1>
        <div>
          <ul>
            <Link href={"/cv"}> <li>CV</li></Link>
            <Link href={"/cv/persnal"}> <li>Persnal</li></Link>
            <Link href={"/cv/persnal/education/skills"}> <li>Skills</li></Link>
          </ul>
          
          <div className="bg-blue-500 flex justify-center items-center">
            <p>
            <label htmlFor="name"> Matric :  </label>
<input type=" text"  id="name" name="Matric" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />      
<label htmlFor="name"> Intermidate :  </label>
<input type=" text"  id="name" name="Intermediate" className="bg-red-500 flex text-white"/>
<br />    
<label htmlFor="name"> From :  </label>
<input type=" text"  id="name" name="From" className="bg-red-500 flex text-white"/>
<br />
<label htmlFor="name"> B-A :  </label>
<input type=" text"  id="name" name="B-A" className="bg-red-500 flex text-white"/>
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
