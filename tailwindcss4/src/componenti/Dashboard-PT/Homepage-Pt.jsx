import { NavbarPt } from "./navbar-Pt";
import { HeaderPt } from "./header-Pt";
import { SidebarPt } from "./sidebar-Pt";

export default function HomepagePt() {
  return (
    <div
      className="md:min-h-screen md:w-full md:bg-sfondo"
      style={{ "--nav-height": "110px" }}
    >
      <div className="md:grid md:min-h-screen md:grid-cols-[90px_minmax(0,1fr)] md:[grid-template-areas:'sidebar_content']">
        <div className="md:hidden">
          <NavbarPt />
        </div>
        <div className="hidden md:block md:[grid-area:sidebar]">
          <SidebarPt />
        </div>

        <main className="md:[grid-area:content] md:ml-[60px] lg:ml-[80px]">
          <HeaderPt />
        </main>
      </div>
    </div>
  );
}
