import { createContext, useContext, useState } from "react"

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {
    const [isMainCourse, setIsMainCourse] = useState(true)
    const [isAppetizer, setIsAppetizer] = useState(false)
    const [isDessert, setIsDessert] = useState(false)
    const [isDrink, setIsDrink] = useState(false)

    const [iranianAppetizer, setAppetizerProducts] = useState([])
    const [nonIranianAppetizer, setNonIranianAppetizer] = useState([])

    const [iranianDessert, setIranianDessert] = useState([])
    const [nonIranianDessert, setNonIranianDessert] = useState([])

    const [iranianDrink, setIranianDrink] = useState([])
    const [nonIranianDrink, setNonIraniandrink] = useState([])

    const mainCourseHandler = () => {
        setIsMainCourse(true)
        setIsAppetizer(false)
        setIsDessert(false)
        setIsDrink(false)
    }

    const appetizerHandler = () => {
        setIsMainCourse(false)
        setIsAppetizer(true)
        setIsDessert(false)
        setIsDrink(false)
    }

    const dessertHandler = () => {
        setIsMainCourse(false)
        setIsAppetizer(false)
        setIsDessert(true)
        setIsDrink(false)
    }

    const drinkHandler = () => {
        setIsMainCourse(false)
        setIsAppetizer(false)
        setIsDessert(false)
        setIsDrink(true)
    }

    return (
        <ProductContext.Provider value={{
            isMainCourse,
            isAppetizer,
            isDessert,
            isDrink,
            iranianAppetizer,
            nonIranianAppetizer,
            iranianDessert,
            nonIranianDessert,
            iranianDrink,
            nonIranianDrink,
            setAppetizerProducts,
            setNonIranianAppetizer,
            setIranianDessert,
            setNonIranianDessert,
            setIranianDrink,
            setNonIraniandrink,
            mainCourseHandler,
            appetizerHandler,
            dessertHandler,
            drinkHandler
        }}>
            {children}
        </ProductContext.Provider>
    )
}