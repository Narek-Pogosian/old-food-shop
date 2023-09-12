"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // Navigates to /shop and removes queryParams
  const handleRefresh = () => {
    window.history.replaceState(null, "", "/shop");
    window.location.reload();
    // Need reload to run server code again
  };

  return (
    <div className="flex flex-col items-center gap-10 pt-24">
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <Button onClick={handleRefresh}>Try Again</Button>
    </div>
  );
}
