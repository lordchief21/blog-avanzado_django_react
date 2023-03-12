import PrincipalPage from "containers/pages/PrincipalPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : '/',
        element: <PrincipalPage />
    }
]);

export default router;