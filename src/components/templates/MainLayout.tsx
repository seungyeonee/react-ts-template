import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { forwardRef, HTMLProps } from "react";

const MainLayout = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <>
        <Header />
        {/* Outlet : pages 폴더에 있는 페이지 컴포넌트가 들어가는 영역 */}
        <main className="contents-area">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
);

export default MainLayout;
