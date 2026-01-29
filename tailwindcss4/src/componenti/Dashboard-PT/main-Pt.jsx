import { ContainerPrincipale } from "./mainContainer/container-principale";

export function MainPt() {
  return (
    <main className="md:max-w-7xl px-4 md:m-24 md:px-6 lg:px-8 md:grid md:grid-cols-2 ">
      <div className="col-span-1">
        <ContainerPrincipale />
      </div>
    </main>
  );
}
