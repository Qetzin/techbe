export default function Intro() {
  return (
    <section className="overflow-hideen py-14 lg:py-28 bg-[url(/bg/gray-waves-bg.png)]">
      <div className="container max-w-[1300px]">
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="relative wow fadeInUp" data-wow-delay=".3s">
            <div className="absolute bottom-12">
              <img
                data-tilt=""
                data-tilt-max={10}
                alt=""
                src="/bg/about-bg.png"
                width={465}
                height={230}
              />
            </div>
            <div className="relative -right-5 -bottom-1 lg:-right-28">
              <img
                data-tilt=""
                data-tilt-max={20}
                width={242}
                height={474}
                src="/images/screen1.jpg"
                alt=""
                className="shadow-xl"
              />
            </div>
            <div className="absolute -top-5 right-44 animate-spin animate-duration-150 lg:top-24">
              <img src="/icons/star.png" width={34} height={34} alt="" />
            </div>
            <div className="absolute -top-7 right-40 animate-spin animate-duration-150 lg:top-32">
              <img src="/icons/star-small.png" width={24} height={24} alt="" />
            </div>
            <div className="absolute -top-12 -left-1 animate-spin animate-duration-150 lg:top-10">
              <img src="/icons/about.png" width={73} height={68} alt="" />
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".6s">
            <div data-wow-delay=".3s" className="wow fadeInUp mb-2,5 text-left bg-clip-text text-sm font-bold lg:text-base bg-linear-(--gradient2) uppercase">
              O aplikacji
            </div>
            <h2 data-wow-delay=".6s" className="text-foreground wow fadeInUp mb-12 text-left text-xl font-extrabold lg:text-4xl">
              Zwiększamy Twoją efektywność i świadomość budowania budżetu
            </h2>
            <p className="text-gray mb-4 text-base leading-7">
              Dzięki temu narzędziu nauczysz się jak skalować biznes Będziesz
              mógł prześledzić wszystkie swoje wydatki i przychody, przec co
              lepiej nauczysz się zarządzać finansami Twojej firmy
            </p>
            <div className="my-10 space-y-4">
              <div className="flex ml-1.5 items-center gap-2">
                <img src="/icons/sign-icon.png" width={20} height={20} alt="" />
                <p className="text-gray">Mnogość kategorii finansowych.</p>
              </div>
              <div className="flex ml-1.5 items-center gap-2">
                <img src="/icons/sign-icon.png" width={20} height={20} alt="" />
                <p className="text-gray">Wiele źródeł rachunków.</p>
              </div>
              <div className="flex ml-1.5 items-center gap-2">
                <img src="/icons/sign-icon.png" width={20} height={20} alt="" />
                <p className="text-gray">Czytelne wykresy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
