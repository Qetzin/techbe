import { features } from "@/data/home-data";

export default function Features() {
  return (
    <section className="overflow-hidden py-14 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 place-content-center place-items-center gap-7 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div className="mx-auto flex max-w-[370px] flex-col items-center px-3.5 py-5 transition hover:shadow-(--shadow1) lg:px-7 lg:py-10">
                <img src="{feature.icon}" width={70} height={70} alt=''></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
