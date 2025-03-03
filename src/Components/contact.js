import { useState } from "react";

const ContactSection = ()=>{
    const [isName,setIsName] = useState("");
    const [isEmail,setIsEmail] = useState("");
    const [isContact,setIsContact] = useState("");
    const [isPurpose,setIsPurpose] = useState("");

    return(
        <section className="mt-4  widt1 container">
            <h1 className="my-3 text-center contact-font">Contact <span className="me">Me!</span></h1>
            <form method="post" className="p-3 row row-cols-2 form-group justify-content-between">
               <input type="text" placeholder="Full Name" required="true" value={isName} onChange={(e)=>{
                    setIsName(e.target.value)
                }} className="col form-control-sm bg-transparent my-3 p-3 rounded-3 inputn"/> 

                <input type="email" placeholder="Email Address" required="true" value={isEmail} onChange={(e)=>{
                    setIsEmail(e.target.value)
                }} className="col form-control-sm my-3 p-3 rounded-3 inputn" />

                <input type="phone" placeholder="Mobile Number" required="true" value={isContact} onChange={(e)=>{
                    setIsContact(e.target.value)
                }} className="col form-control-sm mb-3 p-3 rounded-3 inputn" />

                <input type="text" placeholder="Contact Purpose" value={isPurpose} onChange={(e)=>{
                    setIsPurpose(e.target.value)
                }} className="col form-control-sm mb-3 p-3 rounded-3 inputn" />

                <textarea placeholder="Write Your Message" className="col-12 mb-4 rounded-3"></textarea>

                <button className=" btn p-2 offset-5 btn-submit ">Submit</button> 
            </form>
        </section>
    )
}

export default ContactSection;