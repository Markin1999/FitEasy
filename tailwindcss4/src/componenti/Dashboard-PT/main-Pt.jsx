import { ContainerPrincipale } from "./mainContainer/container-principale";
import { ContainerImpegni } from "./mainContainer/container-impegni";

export function MainPt() {
  return (
    <main className="w-full mx-auto px-4  py-8 md:my-24 md:gap-4 md:grid md:grid-cols-2 ">
      <div className="col-span-1 mb-4">
        <ContainerPrincipale />
      </div>
      <div className="col-span-1 mb-4">
        <ContainerImpegni />
      </div>
    </main>
  );
}
