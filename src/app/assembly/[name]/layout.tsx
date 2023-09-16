export default function AssemblyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container">{children}</div>
    );
}