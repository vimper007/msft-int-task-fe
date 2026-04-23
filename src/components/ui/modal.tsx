import type { ReactNode } from "react";
import { createPortal } from 'react-dom';


const ModalComponent = ({ children, visible }: { children: ReactNode, visible: boolean }) => {
  if (!visible) return
  else return <div className="bg-red-500 w-fit h-fit absolute">
    {createPortal(
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
        <div className="bg-gray-800 p-4 rounded-lg shadow">{children}</div>
      </div>
      , document.body)}
  </div>
};

export default ModalComponent;
