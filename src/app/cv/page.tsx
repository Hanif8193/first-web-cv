import Link from "next/link";

export default function Cv(){
    return(
      <div>
        <h1 className="text-center italic font-bold text-red-500 text-5xl">Curriculum Vitae</h1>
   
          <div>
          <ul>
            
            <Link href={"/cv/persnal"}> <li>Persnal</li></Link>
            <Link href={"/cv/persnal/education"}> <li>Education</li></Link>
            <Link href={"/cv/persnal/education/skills"}> <li>Skills</li></Link>
          </ul>
              
          </div>
        </div>
      
    ) 
}