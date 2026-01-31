import { NavbarPt } from "./navbar-Pt";
import { HeaderPt } from "./header-Pt";
import { SidebarPt } from "./sidebar-Pt";
import { MainPt } from "./main-Pt";

export default function HomepagePt() {
  return (
    <div
      className="md:min-h-screen md:w-full bg-sfondo"
      style={{ "--nav-height": "110px" }}
    >
      <div className=" md:grid md:min-h-screen md:grid-cols-[90px_minmax(0,1fr)] md:[grid-template-areas:'sidebar_content']">
        <div className="md:hidden">
          <NavbarPt />
        </div>
        <div className="hidden md:block md:[grid-area:sidebar]">
          <SidebarPt />
        </div>

        <div className="md:[grid-area:content] ">
          <HeaderPt />
        </div>
        <div className="md:[grid-area:content] w-full pt-[70px] md:pt-0 ">
          <MainPt />
        </div>
      </div>
    </div>
  );
}
