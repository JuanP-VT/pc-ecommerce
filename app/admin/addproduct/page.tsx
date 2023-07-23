/**
 * The Page component displays a form to add a new product.
 *
 * @returns {JSX.Element} - The rendered React component displaying the form to add a new product.
 */
import NewProductForm from "../../components/forms/NewProductForm";
export const dynamic = "force-dynamic";
function Page() {
  return (
    <>
      <NewProductForm />
    </>
  );
}

export default Page;
