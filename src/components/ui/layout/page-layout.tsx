import type { ReactNode } from "react";
import MenuComponent from "../menu-component";

const PageLayout = ({children}:{children:ReactNode}) => {
  return <div className="flex min-h-screen flex-col">
        <MenuComponent/>
        <div className="flex-1">
          {children}
        </div>
  </div>;
};

export default PageLayout;
