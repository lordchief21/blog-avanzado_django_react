import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux";

const PrincipalPage = () => {
    return (
        <FullWidthLayout>
            Home

        </FullWidthLayout>
    )
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{})(PrincipalPage);