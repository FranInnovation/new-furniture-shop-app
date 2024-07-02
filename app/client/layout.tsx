import NavigationHeader from "@/components/navigation-header.tsx/navigation-header"

import { NavigationLayoutProps } from "@/types/types"

export default function NavigationLayout({children}: NavigationLayoutProps) {
    return (
        <>
        <NavigationHeader />
        {children}
        </>
    )
}