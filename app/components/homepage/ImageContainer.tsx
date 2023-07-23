/**
 * Image Container Component
 *
 * The component renders a container with a background image and overlays the title and subtitle on top of it.
 *
 * @component
 * @param {string} imageUrl - The URL of the background image.
 * @param {string} title - The title text to be displayed on top of the image.
 * @param {string} subtitle - The subtitle text to be displayed on top of the image.
 *
 * @returns {JSX.Element} The JSX element representing the Image Container component.
 */
type Props = {
  imageUrl: string;
  title: string;
  subtile: string;
};

export default function ImageContainer({ imageUrl, title, subtile }: Props) {
  return (
    <div
      className="relative flex  flex-col  items-center bg-gradient-to-r bg-no-repeat text-white"
      style={{
        height: "650px",
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
      }}
    >
      <p className="mt-20 text-center text-2xl font-bold md:text-5xl">
        {title}
      </p>
      <p className="text-center text-lg md:text-2xl">{subtile}</p>
    </div>
  );
}
