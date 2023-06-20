//This component is the main view for each product in the database

import { ProductWithId } from '@/app/types/product'

type Props = {
    product:ProductWithId
}

function ProductPage({product}: Props) {
  return (
    <div>{product.name}</div>
  )
}

export default ProductPage