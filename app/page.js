"use client";
import Products from "./components/product";
import Image from "next/image";
import Loading from "./components/loading";
import SecondaryButton from "./foundation/secondary-button";
import Carousel from "./components/carousel";
import useFetchProducts from "./apiFetches/products";


export default function Home() {
  const { products, loading } = useFetchProducts();
  const bestSeller = products?.filter(
    (product) => product.status === "Best Seller"
  );
  const limitedAvailability = products?.filter(
    (product) => product.status === "Limited Availability"
  );

  const COLLECTIONS = [
    {
      image:
        "https://us.sunspel.com/cdn/shop/articles/Merino-Wool-Journal-Template.jpg?v=1730128873&width=1296",
      h1: "Hot Picks for the Season",
      miniTitle: "Curated Styles Just for You.",
      copy:
        "Upgrade your wardrobe without breaking the bank. Discover premium styles now on sale—limited time, limited stock.",
      cta: "Explore Collection",
      link: "/collections/on sale",
    },
    {
      image:
        "https://us.sunspel.com/cdn/shop/files/About-Icons-T.jpg?v=1717413195&width=900",
      h1: "Fresh Looks, Timeless Appeal",
      miniTitle: "Discover Your Next Favorite.",
      copy:
        "Be the first to wear what’s new. Our latest arrivals combine classic craftsmanship with modern fits, made to stand out.",
      cta: "Explore Collection",
      link: "/collections/new arrival",
    },
  ];
  

  const INTRO = [
    {
      id: 1,
      image1:
        "https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/9fc7e144_edff/womens-rib-knit-organic-cotton-cardigan-bone",
      image2:
        "https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a28e2ab4_5b86/womens-rib-knit-organic-cotton-cardigan-bone",
      text: "Discover Your Perfect Comfort",
      cta: "Shop the Exclusive Collection",
      alt1:
        "Stylish woman in casual blue jeans and a white shirt, leaning on one leg with a leather bag over her shoulder.",
      alt2:
        "Stylish woman seen from behind, wearing blue jeans and a white shirt.",
      href: "collections/Exclusive"
    },
    {
      id: 2,
      image1:
        "https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/036f2e98_9b7f/mens-heavyweight-pocket-tee-black",
      image2:
        "https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/ad485633_983f/mens-heavyweight-pocket-tee-black",
      text: "Elevate Your Everyday Look",
      cta: "Shop the New Arrivals",
      alt1:
        "Stylish man in white pants and a dark gray shirt, seated with relaxed posture.",
      alt2:
        "Stylish man seen from behind, wearing white pants and a dark gray shirt.",
      href: "collections/new arrival"
    }
  ];
  
  

  return (
    <main className="w-full flex flex-col gap-9">
      <div className="w-full overflow-hidden flex flex-col dynamic-x-padding">
        {INTRO.map((item) => {
          return (
            <div className="w-full flex md:flex-row flex-col" key={item.id}>
              <div className="w-full h-fit relative md:w-[624px]">
                <Image
                  src={item.image1}
                  width={624}
                  height={770}
                  alt={item.alt1}
                  className="md:w-[624px]  md:min-w-[624px] w-full"
                />
                <div className="absolute top-3 left-3 w-[249px] h-fit flex flex-col gap-3">
                  <h1>{item.text}</h1>
                  <SecondaryButton
                    text={item.cta}
                    href={item.href}
                  />
                </div>
              </div>
              <Image
                src={item.image2}
                width={624}
                height={770}
                alt={item.alt2}
                className="md:w-[624px] md:min-w-[624px] sm:w-full w-0"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 dynamic-padding ">
        <h2>Everlanes Best Sellers.</h2>
        <div className="flex gap-9">
          {loading ? (
            <Loading number={4} />
          ) : (
            <Products items={bestSeller} showHearted={true} />
          )}
        </div>
      </div>
      <div className="w-full dynamic-padding pr-0 h-fit flex md:flex-row flex-col gap-9 items-center justify-center">
        <div className="w-full md:max-w-[606px] md:min-w-[606px] h-[770px] bg-[url('https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/4d5ab00b_8430/womens-cheeky-relaxed-straight-jean-vintage-mid')] bg-cover bg-center p-3">
          <div className="w-[250px] h-fit flex flex-col gap-3 text-black">
            <h1>Fashion That Cares</h1>
            <p>Look good, feel good, do good.</p>
          </div>
        </div>
        <div className="max-w-full overflow-hidden">
          <Carousel newArrivals={limitedAvailability} isLoading={loading} />
        </div>
      </div>
      <div className="w-full h-fit flex md:flex-row flex-col gap-9 dynamic-padding">
        {COLLECTIONS.map((item, index) => {
          return (
            <div
              key={index}
              className="md:w-[606px] w-full h-fit flex flex-col gap-6 items-center justify-center text-center"
            >
              <Image
                src={item.image}
                width={606}
                height={770}
                alt="Fashionable woman in blue jeans, a crisp white dress shirt, and a scarf, leaning casually on her right leg."
                className="w-full"
              />
              <div className="w-full h-fit flex flex-col gap-3">
                <p>{item.miniTitle}</p>
                <h2>{item.h1}</h2>
              </div>
              <SecondaryButton text={item.cta} href={item.link} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
