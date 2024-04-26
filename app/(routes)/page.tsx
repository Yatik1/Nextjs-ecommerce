import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard("dad50feb-b538-453e-a846-453ebffcf8c7")
  return (
    <Container>
      <div className="space-y-10 pb-10">
         <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage 