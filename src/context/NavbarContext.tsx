import { createContext, useState } from "react";
export interface NavbarContextProps {
	isNavPosFixed: boolean;
	setIsNavPosFixed: (prevState: boolean) => void;
}
const NavbarContext = createContext<NavbarContextProps | null>(null);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
	const [isNavPosFixed, setIsNavPosFixed] = useState(false);

	return <NavbarContext.Provider value={{ isNavPosFixed, setIsNavPosFixed }}>{children}</NavbarContext.Provider>;
};
export default NavbarContext;
