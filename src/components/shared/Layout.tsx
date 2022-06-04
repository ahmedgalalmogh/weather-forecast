import { ReactNode } from "react";
import AppNavBar from "./NavBar";
import { LayoutWrapper, Overlay } from "./styles";

type LayoutProps = {
  children?: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppNavBar />
      <LayoutWrapper>
        <Overlay
         >
          {children}
        </Overlay>
      </LayoutWrapper>
    </>
  );
};
export default Layout;
