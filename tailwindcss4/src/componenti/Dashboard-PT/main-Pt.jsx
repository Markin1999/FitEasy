import { ContainerPrincipale } from "./mainContainer/container-principale";
import { ContainerImpegni } from "./mainContainer/container-impegni";

export function MainPt() {
  return (
    <main className="w-full mx-auto px-4 py-8 md:min-w-4xl md:m-24 md:px-6 md:grid md:grid-cols-2 lg:px-8">
      <div className="col-span-1 mb-4">
        <ContainerPrincipale />
      </div>
      <div className="col-span-2">
        <ContainerImpegni />
      </div>
    </main>
  );
}
