import { Container } from "react-bootstrap";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSreen from "../screens/HomeSreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import LoginSreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";

const RouterApp = () => {
    return (
        <Router>
            <Header/>
            <main>
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeSreen/>}/>
                        <Route path="/login" element={<LoginSreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                        <Route path="/register" element={<RegisterScreen/>}/>
                        <Route path="/product/:id" element={<ProductScreen/>}/>
                        <Route path="/cart">
                            <Route index element={<CartScreen/>}/>
                            <Route path=":id" element={<CartScreen/>}/>
                        </Route>
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    )
}
export default RouterApp