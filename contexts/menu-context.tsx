import { createContext } from "react"

type MenuContextType = {
    menuName: string,
    setMenuName: React.Dispatch<React.SetStateAction<string>>
}
const MenuContext = createContext<MenuContextType | undefined>(undefined);
export default MenuContext;