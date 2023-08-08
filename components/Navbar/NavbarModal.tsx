import React from "react";
import { useSpring, animated } from "react-spring";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const animation = useSpring({
    opacity: show ? 1 : 0,
  });

  return (
    <>
      {show && (
        <div className="md:hidden fixed inset-0 z-[999999] flex items-start justify-center mx-auto p-2">
          <animated.div className="fixed inset-0" onClick={onClose}></animated.div>
          <animated.div
            style={animation}
            className="bg-white p-3 rounded-lg shadow-md w-full relative"
          >
            {children}
          </animated.div>
        </div>
      )}
    </>
  );
};

export default Modal;