import Footer from "components/footer/Footer";
import NavBar from "components/navbar/NavBar";
import { connect } from "react-redux";

const FullWidthLayout = ({children}) => {
    return(
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps,{

})(FullWidthLayout)