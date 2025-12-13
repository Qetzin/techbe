export default function Intro() {
    return (
        <section className="overflow-hideen py-14 lg:py-28 bg-[url/bg/waves-bg.png]">
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
                                src="/images/screen1.png"
                                alt=""
                                className="shadow-xl"
                            />
                        </div>
                        <div className="absolute -top-5 right-44 animate-spin lg:top-24">
                            <img src="/icons/star-small.png" width={24} height={24} alt="" />
                        </div>
                        <div className="absolute -top-7 right-40 animate-spin lg:top-32">
                            <img src="/icons/star-small.png" width={24} height={24} alt="" />
                        </div>
                        <div className="absolute -top-12 -left-1 animate-spin lg:top-10">
                            <img src="/icons/about.png" width={73} height={68} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
