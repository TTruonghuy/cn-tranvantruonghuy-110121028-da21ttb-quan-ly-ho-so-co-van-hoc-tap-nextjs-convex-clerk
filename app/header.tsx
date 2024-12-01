import { Button } from "@/components/ui/button";
import {
  //OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useQuery } from "convex/react";
//import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { userInfo } from "os";


export function Header() {
  return (
    <div className="relative z-10 h-[100px] border-b py-4 bg-gray-50">
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl text-black ">
          <Image src="/logo.ico" width="60" height="60" alt="tvu logo" />
          <div className="flex flex-col">
        <span>Hồ sơ cố vấn học tập - TVU</span>
        <p className="text-sm text-gray-700">Khoa Kỹ thuật và Công nghệ</p>
      </div>
        </Link>

        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Tệp tin của bạn</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
        {/* <OrganizationSwitcher /> */}
        <h2>Welcome</h2>
          <UserButton/>
          <SignedOut>
            <SignInButton>
              <Button className="bg-blue-800">Đăng nhập</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}