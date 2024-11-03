import DomainBlock from "./domainBlock"
import Card from './card'
import Home from "./home"
// import Features from "./features"
import ContractorCard from "../Contractor/contractor"
import NewCard from "./newCard"

function Contractor(){
    return (
        <>
            <Home></Home>
            {/* <Features></Features> */}
            <DomainBlock></DomainBlock>
            <ContractorCard/> 
            <NewCard />
        </>
    )
}
export default Contractor