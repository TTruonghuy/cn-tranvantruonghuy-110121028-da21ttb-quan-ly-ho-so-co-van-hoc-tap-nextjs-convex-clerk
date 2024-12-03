import { SideNav } from "./side-nav";
import Image from 'next/image';


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="container mx-auto pt-12 min-h-screen">
            <Image
                alt="an image of a picture and directory icon"
                 width="500"
                height="500"
                src="/logo.ico"
                className="absolute top-[40%] left-[39%] inset-0 object-cover opacity-5 -z-10"
            />
           <div className="flex gap-8 relative">
                <SideNav />
                <div className="w-full">{children}</div>
            </div>
        </main>
    );
}