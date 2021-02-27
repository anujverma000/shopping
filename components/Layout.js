import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header/>
      {children}
      <Footer/>
    </Box>
  );
};

export default Layout;
