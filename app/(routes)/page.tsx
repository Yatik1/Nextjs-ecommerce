import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"
import ProductList from "@/components/ui/product-list"

export const revalidate = 0;

const HomePage = async () => {
  
  const billboard = await getBillboard("dad50feb-b538-453e-a846-453ebffcf8c7")
  const products = await getProducts({isFeatured:true})

  return (
    <Container>
      <div className="space-y-10 pb-10">
         <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
           <ProductList title="Featured Products" items={products} />
         </div>
      </div>
    </Container>
  )
}

export default HomePage 