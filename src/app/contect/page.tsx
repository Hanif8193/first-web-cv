export default function Contect(){
    return(
      <div className="bg-green-500 flex justify-center items-center h-screen">
        <div className="space-y-7 bg-blue-600 p-4 rounded-lg">
          <h1 className="text-center text-5xl text-white font-bold">Contact Us</h1>
          <form className="flex flex-col gap-5 text-2xl">
  <input type="text" className="p-2 outline-none rounded-md"placeholder="Your Name"/>
  
  <input type="email" className="p-2 outline-none rounded-md"placeholder="Your Email"/>
  
  <textarea className="p-2 outline-none rounded-md resize-none"placeholder="Your Message" ></textarea>
  
  <input type="submit"value="Submit" className="bg-orange-500 text-white cursor-pointer transition-all 
  duration-100 rounded-lg hover:bg-orange-600" />
          </form>
        </div>
      </div>
    )
  }
  