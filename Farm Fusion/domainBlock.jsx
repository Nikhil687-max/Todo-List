function DomainBlock(){
  return (
    <> 
      <section className="block container">
          <header className="block__header">
            <h2>Our market place starts at a min buy of 100kgs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisui?
            </p>
          </header>
          <div className="input-group domain-search">
            <input type="text" className="input" placeholder="Enter domain name here..." />
            <button className="btn button--accent button--streched">
              <div className="search-text">search</div>
            </button>
          </div>
        </section>
    </>
  )
}
export default DomainBlock