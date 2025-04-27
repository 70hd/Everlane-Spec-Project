import PrimaryButton from "./foundation/primary-button";

export default function Custom404() {
  return (
  <main className="w-full flex dynamic-padding flex-col gap-6 items-start justify-start">
    <h1>
      Page Not Found
    </h1>
    <p className="w-full max-w-[392px]">
    Sorry for the inconvenience. Go to our homepage or check out these popular categories
    </p>
    <PrimaryButton text={"Home Page"} href={"/"}/>
    

  </main>
)
}
