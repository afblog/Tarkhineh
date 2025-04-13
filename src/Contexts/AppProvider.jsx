import { UIProvider } from "./UIContext"
import { AuthProvider } from "./AuthContext"
import { CartProvider } from "./CartContext"
import { ProductProvider } from "./ProductContext"
import { DashboardProvider } from "./DashboardContext"

export const AppProvider = ({ children }) => {
    return (
        <UIProvider>
            <AuthProvider>
                <CartProvider>
                    <ProductProvider>
                        <DashboardProvider>
                            {children}
                        </DashboardProvider>
                    </ProductProvider>
                </CartProvider>
            </AuthProvider>
        </UIProvider>
    )
}