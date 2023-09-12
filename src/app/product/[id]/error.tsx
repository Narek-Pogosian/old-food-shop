"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-10 pt-24">
      <h2 className="text-3xl font-semibold">Could not find product</h2>
      <Button asChild>
        <Link href="/shop">Back to Shop</Link>
      </Button>
    </div>
  );
}
