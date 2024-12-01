"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
    const pathname = usePathname();

    return (
        <div className="w-40 flex flex-col gap-4 border-r">
            <Link href="/dashboard/files">
                <Button
                    variant={"link"}
                    className={clsx("flex gap-2", {
                        "text-blue-500": pathname.includes("/dashboard/files"),
                    })}
                >
                    <FileIcon /> Tất cả tệp tin
                </Button>
            </Link>

            <Link href="/dashboard/favorites">
                <Button
                    variant={"link"}
                    className={clsx("flex gap-2", {
                        "text-blue-500": pathname.includes("/dashboard/favorites"),
                    })}
                >
                    <StarIcon /> Mục yêu thích
                </Button>
            </Link>

            <Link href="/dashboard/trash">
                <Button
                    variant={"link"}
                    className={clsx("flex gap-2", {
                        "text-blue-500": pathname.includes("/dashboard/trash"),
                    })}
                >
                    <TrashIcon /> Thùng rác
                </Button>
            </Link>
        </div>
    );
}