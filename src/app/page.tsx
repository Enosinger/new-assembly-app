import Link from 'next/link'

let assemblies = [
  {
    id: 1,
    name: "The one on democracy"
  },
  {
    id: 2,
    name: "The one on food"
  }
]

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className='container'>
      <p className="text-2xl font-bold">The following assemblies are available:</p>
      <ol className='list-inside list-decimal'>
        {assemblies.map((assembly) => (
          <li key={assembly.id}>
            <Link href={`/assembly/${assembly.id}`} className="text-blue-600 visited:text-purple-600">{assembly.name}</Link>
          </li>
        ))}
      </ol>
    </div>

  );
}