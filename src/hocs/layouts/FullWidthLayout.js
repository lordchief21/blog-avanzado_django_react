import Footer from "components/navigation/Footer";
import NavBar from "components/navigation/NavBar";
import { connect } from "react-redux";

const FullWidthLayout = ({children}) => {
    return(
        <>
            <Footer/>
            {children}
            <NavBar/>
        </>
    )
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps,{

})(FullWidthLayout)