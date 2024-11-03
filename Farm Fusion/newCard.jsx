import img2 from './../Contractor/karan.jpeg'
import './newCard.css'

function NewCard(){
    return(
        <>

            <div id="Card">
                <div id="cardImage">
                    <img src="./../Contractor/karan.jpeg" style={{maxWidth:"300px",minWidth:"220px",maxHeight:"200px"}} alt="" />
                </div>
                <div id="cardDetail">
                    <h1 id='NameOfCrop'>SugerCane</h1>
                    <h2 id='Quantity'>750Kgs</h2>
                    <h2 id='Price'>30rs/Kg</h2>
                </div>
            </div>

        </>
    )
}
export default NewCard