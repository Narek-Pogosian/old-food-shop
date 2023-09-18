"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import {
  ReviewSchemaType,
  reviewSchema,
} from "@/lib/validations/review-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { useState } from "react";
import { url } from "@/lib/data/api-url";

type Props = {
  productId: string;
};

const initialData: ReviewSchemaType = {
  name: "",
  rating: 5,
  description: "",
};

const WriteReviewDialog = ({ productId }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState("");

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const form = useForm<ReviewSchemaType>({
    resolver: zodResolver(reviewSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: ReviewSchemaType) => {
    fetch(`${url}/api/review`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ data, productId }),
    })
      .then(() => closeDialog())
      .catch(() => setMessage("Sorry, something went wrong"));
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full font-semibold">Write a review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write a review</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating between 0 to 5</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={5}
                      placeholder="Rating between 0 - 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your thought on this product"
                      rows={4}
                      {...field}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {message && (
              <div className="p-3 border rounded">
                <p>{message}</p>
              </div>
            )}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="destructive" onClick={closeDialog}>
                Cancel
              </Button>
              <Button type="submit" className="font-semibold">
                Add Review
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewDialog;
