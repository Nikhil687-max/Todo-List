import './styles.css'

function Home(){
    return (
        
    <>
        
        {/* // <!--  Navbar  --> */}
        <nav className="nav-bar" style={{background:"#33e863",display:"block"}}>
            <h2 style={{fontSize:"5.2rem",display:"inline",color:"#fff"}}>F</h2>
            <h2 className="" style={{background:"#33e863",color:"white",fontSize:"3.4rem",display:"inline"}}>armFusion</h2>
        </nav>
        
          {/* <!-- Landing page --> */}


          <section className="block block--skewed-left" style={{background: "#fff"}}>
            <div className="container grid grid--1x2">
              <header className="block--header hero__content">
                <h1 className="block__heading" style={{fontSize:"4rem" }}>Bridging Farmers, Contractors and Customers</h1>
                <p className="hero__tagline">Your marketplace for direct trade and connections</p>
                <a onClick={()=>{scrollTo(0,700)}} className="btn button--accent button--streched" id="GetStarted">GET STARTED</a>
                {/* <input type="button" onClick={() => {document.getElementById('selectFeature').scrollIntoView()}}  className="btn button--accent button--streched" id="GetStarted"  placeholder="Get Started"/> */}
              </header>
              <img className="hero__image" src="./" alt="" />
            </div>
          </section>
      </>
    )
}
export default Home