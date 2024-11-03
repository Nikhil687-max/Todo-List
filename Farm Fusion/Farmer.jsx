import DomainBlock from "./domainBlock"
import Card from './card'
import Home from "./home"
// import Features from "./features"

function Farmer(){
    return (
        <>
            <Home></Home>
            {/* <Features></Features> */}
            <DomainBlock></DomainBlock>
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    )
}
export default Farmer