import ImageContainer from "./components/homepage/ImageContainer";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <>
      <div className="flex w-full flex-col">
        <ImageContainer
          title="NVIDIA RTX 3090 Ti"
          subtile="UNLEASH THE BEAST WITHIN"
          imageUrl="https://i.ibb.co/PmPSRXY/geforce-rtx-3090-product-gallery-full-screen-3840-2.jpg"
        />
        <ImageContainer
          title="Intel Core i9-13900K Processor"
          subtile="POWER ENGINEERING"
          imageUrl="https://i.ibb.co/2dGDfsJ/i9-13th.jpg"
        />
        <ImageContainer
          title="MSI MEG X570 GODLIKE"
          subtile="THE POWER OF GOD"
          imageUrl="https://i.ibb.co/x5FF0qt/x570-godlike-cooling-transformed.jpg"
        />
        <ImageContainer
          title="AMD RX 6900 XT"
          subtile="MADE FOR ENTHUSIASTS"
          imageUrl="https://i.ibb.co/c6LksBF/amd-rx-6900.png"
        />
        <div className="grid gap-6 bg-slate-900 p-6 lg:grid-cols-2">
          <ImageContainer
            title="Razer Basilisk V3 Pro"
            subtile="THE POWER IN YOUR HANDS"
            imageUrl="https://i.ibb.co/qd70Zkc/HomeOne.jpg"
          />
          <ImageContainer
            title="RAZER COBRA PRO"
            subtile="PERFECTED FOR PLAY"
            imageUrl="https://i.ibb.co/s2DsTrM/cobra-pro-homepage-desktop.webp"
          />
          <ImageContainer
            title="RAZER DEATHADDER V3 PRO FAKER EDITION"
            subtile="FOR THE PRO"
            imageUrl="https://i.ibb.co/4YzhHHp/deathadder-v3-pro-faker-hero.jpg"
          />
          <ImageContainer
            title="RAZER DEATHSTALKER V2 PRO TENKEYLESS"
            subtile="ULTRA-FAST, ULTRA-RELIABLE ACTUATION"
            imageUrl="https://i.ibb.co/jZZF4BF/deathstalker-v2-line-family-hero.jpg"
          />
        </div>
      </div>
    </>
  );
}
