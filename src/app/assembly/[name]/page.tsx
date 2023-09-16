export default function Page({ params }: { params: { name: string } }) {
  return (
    <p className="text-2xl font-bold">Assembly: {params.name}</p>
  )
}