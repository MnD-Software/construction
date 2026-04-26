"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function DeleteButton({ url }: { url: string }) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(url, { method: "DELETE" });

    if (!response.ok) {
      toast.error("Delete failed.");
      return;
    }

    toast.success("Deleted.");
    router.refresh();
  }

  return (
    <Button type="button" variant="ghost" size="sm" onClick={handleDelete}>
      Delete
    </Button>
  );
}
