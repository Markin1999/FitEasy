import ContainerPrincipale from "./mainContainer/container-principale";
import { ContainerImpegni } from "./mainContainer/container-impegni";
import { BottomBarPt } from "./bottom-mobile";

export function MainPt() {
  return (
    <main className="w-full px-4 py-2 md:py-30 md:pr-[70px]">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-6">
        <div className="col-span-1 mb-4 md:mb-0">
          <ContainerPrincipale />
        </div>
        <div className="col-span-1 mb-4 md:mb-0">
          <ContainerImpegni />
        </div>
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <BottomBarPt />
        </div>
      </div>
    </main>
  );
}
