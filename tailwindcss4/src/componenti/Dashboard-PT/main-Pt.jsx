import { ContainerPrincipale } from "./mainContainer/container-principale";
import { ContainerImpegni } from "./mainContainer/container-impegni";

export function MainPt() {
  return (
    <main className="w-full px-4 py-8 md:py-24 md:pr-[70px]">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-6">
        <div className="col-span-1 mb-4 md:mb-0">
          <ContainerPrincipale />
        </div>
        <div className="col-span-1 mb-4 md:mb-0">
          <ContainerImpegni />
        </div>
      </div>
    </main>
  );
}
