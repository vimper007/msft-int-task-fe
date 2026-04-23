import type { ReactNode } from "react";
import MenuComponent from "../menu-component";

const PageLayout = ({children}:{children:ReactNode}) => {
  return <div className="flex flex-col">
        <MenuComponent/>
        {children}
  </div>;
};

export default PageLayout;
