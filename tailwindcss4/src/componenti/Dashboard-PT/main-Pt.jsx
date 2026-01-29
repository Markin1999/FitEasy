import { ContainerPrincipale } from "./mainContainer/container-principale";

export function MainPt() {
  return (
    <main className="w-full mx-auto px-4 py-8 md:min-w-4xl md:px-4 md:m-24 md:px-6 md:grid md:grid-cols-2 lg:px-8">
      <div className="col-span-1">
        <ContainerPrincipale />
      </div>
    </main>
  );
}
