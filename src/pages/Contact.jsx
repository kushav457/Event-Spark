import React, { useState } from "react";
const Contact =() =>{
    //to read data 
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        query:"",
    });
    //to retrive perivous value of user
    const InputEvent= (event) =>{
        const {name,value}= event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };
            });
        }
    
    // const formSubmit=(e) => {
    //     e.preventDefault();
    //     alert(${data.fullname})
    // };

    return(
        <>
        <section className="py-5">
	<div className="container-fluid p-lg-0">
		<div className="row g-0 align-items-center">
			<div className="col-lg-6">
				<div className="col-lg-8 mx-auto">
				
					<h2 className="display-5 fw-bold">Contact Us</h2>
					
					<form>
						<div className="row">
							<div className="col-md-12">
								<div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname"
  value= {data.fullname} onChange={InputEvent} placeholder="Enter your Name"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
								<label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone"
  value={data.phone}  onChange={InputEvent} placeholder="Enter your Mobile Number"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email"
  value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
								</div>
							</div>
              <div className="col-md-12">
								<div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"> Your Query</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="query"
  value={data.query} onChange={InputEvent}></textarea>
								</div>
							</div>
							<div className="col-md-5">
								<div className="d-grid">
                <button class="btn btn-outline-primary" type="submit">Submit</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-6">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.3979906163327!2d76.84981938461111!3d23.077525129361177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e1!3m2!1sen!2sin!4v1709296261034!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	</div>
</section>
     
      </>
    );
};
export default Contact;