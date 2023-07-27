import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "./site-footer";
import useMediaQuery from "@/lib/use-window-size";
import MobileAlert from "./mobile-alert";

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	const { isDesktop, isMobile, isTablet } = useMediaQuery();
	return (
		<>
			{
				isDesktop && <>
					<SiteHeader showGenerate={true} />
					<main>{children}</main>
					<SiteFooter />

				</>
			}
			{isMobile || isTablet && <MobileAlert />}
		</>
	);
}
