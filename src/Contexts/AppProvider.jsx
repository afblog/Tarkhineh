import { UIProvider } from './UIContext'
import { AuthProvider } from "./AuthContext"
import { CartProvider } from "./CartContext"
import { MenuTabsProvider } from "./MenuTabsContext"
import { ProductProvider } from "./ProductContext"
import { DashboardProvider } from "./DashboardContext"

export const AppProvider = ({ children }) => {

    <UIProvider>
        <AuthProvider>
            <CartProvider>
                <MenuTabsProvider>
                    <ProductProvider>
                        <DashboardProvider>
                            {children}
                        </DashboardProvider>
                    </ProductProvider>
                </MenuTabsProvider>
            </CartProvider>
        </AuthProvider>
    </UIProvider>

}