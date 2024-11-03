function Features(){
    return(
    <>
        <div className="grid grid--1x3 block-card" id='selectFeture' style={{clipPath:"0% 10%, 0% 100%, 80% 0%, 100% 90%, 100% 0%, 20% 0%"}}>
          <div className="container block viewcards" style={{background:"#c7e0ce",marginTop:"5px",padding:"10% 6% 9%"}}>
          <div style={{display:"inline-block"}}>
            <h3 className="">Contractor</h3>
            <h4 className="paragraph">Welcome to your one-stop hub for farming success. As a farmer, you can list your crops, manage contracts, and connect with buyers all in one place. Explore opportunities to maximize your yield and gain access to valuable resources tailored to your needs.</h4>
            <a href="./../contractor.html" style={{marginTop:"10px",fontSize:"1.8rem",lineHeight:"0.8"}} className="link-arrow btn button--streched">Contractor</a>
          </div>
        </div><div className="block container viewcards" style={{background:"#c7e0ce",padding:"10% 6% 10%"}}>
          <div>
            <h3 className="">Buyer</h3>
            <h4 className="paragraph">Discover a diverse range of fresh produce and establish a secure connection with local farmers. As a buyer, you can browse available crops, place orders, and explore unique products directly from the source. Our marketplace ensures you get high-quality produce with ease and convenience.</h4>
            <a href="./../buyer.html" style={{marginTop:"10px"}} className="link-arrow btn button--streched">Buyer</a>
          </div>
        </div><div className="block container viewcards" style={{background:"#c7e0ce",marginTop:"5px",padding:"10% 6% 8%"}}>
          <div>
            <h3 className="">Farmer</h3>
            <h4 className="paragraph">Welcome to your one-stop hub for farming success. As a farmer, you can list your crops, manage contracts, and connect with buyers all in one place. Explore opportunities to maximize your yield and gain access to valuable resources tailored to your needs.</h4>
            <a href="./../farmer.html" style={{marginTop:"10px"}} className="link-arrow btn button--streched">Farmer</a>
          </div>
        </div>
        </div>
    </>)
}
export default Features 