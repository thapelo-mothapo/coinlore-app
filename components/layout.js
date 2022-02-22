import Footer from "./footer"
import Nav from "./navbar";

const Layout = ({children}) =>{

	return(
		<div className="content">  
			<Nav />
				{children}
			<Footer />
		</div>
	)
}
export default Layout;