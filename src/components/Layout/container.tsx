export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (

        <main className={`container mx-auto max-w-7xl pt-16 px-6 flex-grow ${className}`}>

            {children}
        </main>
    )
}