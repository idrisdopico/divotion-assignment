import {
  createContext,
  PropsWithChildren,
  useContext,
  useState
} from "react";

export interface MenuState {
  isOpen: boolean;
  toggleIsOpen: (value: boolean) => void;
}

export const MenuContext = createContext<MenuState>(
  {} as MenuState,
);

export const useMenuState = () =>
  useContext<MenuState>(MenuContext);


const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleIsOpen
      }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
