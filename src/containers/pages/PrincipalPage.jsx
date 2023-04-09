import { AboutMe } from "components/about_me/AboutMe";
import { Projects } from "components/projects/Projects";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux";

const PrincipalPage = () => {
    return (
        <FullWidthLayout>
            <AboutMe/>
            <Projects />
        </FullWidthLayout>
    )
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{})(PrincipalPage);