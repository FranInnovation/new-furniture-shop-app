import NavigationHeader from "@/components/navigation-header.tsx/navigation-header"

export default function NavigationLayout({children}) {
    return (
        <>
        <NavigationHeader />
        {children}
        </>
    )
}