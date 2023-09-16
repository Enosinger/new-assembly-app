export default function Page({ params }: { params: { name: string } }) {
  return (<h1>Assembly: {params.name}</h1>)
}