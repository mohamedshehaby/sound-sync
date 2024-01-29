"use client";

import Modal from "@/components/Modal";
import uniqid from "uniqid";

import useUploadModal from "@/stores/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/features/auth/useUser";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to supabase

    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile) {
        toast.error("Missing files");
        return;
      }

      const uniqueId = uniqid();
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueId}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        toast.error("Failed song upload");
        return;
      }

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueId}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        toast.error("Failed image upload");
        return;
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          title: values.title,
          author: values.author,
          image_path: imageData?.path,
          song_path: songData?.path,
          user_id: user?.id,
        });

      if (supabaseError) {
        setIsLoading(false);
        toast.error(supabaseError.message);
        return;
      }

      // When everything is done, close the modal
      router.refresh();
      toast.success("Song uploaded successfully");
      onClose();
      reset();
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Upload a song"
      description="Upload a song to your library"
      onChange={(open) => {
        if (!open) onClose();
        reset();
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 "
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", {
            required: "Title is required",
          })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", {
            required: "Author is required",
          })}
          placeholder="Song author"
        />
        <div>
          <label htmlFor="song" className="mb-1 block">
            Select a song
          </label>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            {...register("song", {
              required: "Song is required",
            })}
            accept=".mp3"
          />
        </div>

        <div>
          <label htmlFor="image" className="mb-1 block">
            Select an image
          </label>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            {...register("image", {
              required: "image is required",
            })}
            accept=".png,.jpg,.jpeg , .webp"
            placeholder="Song author"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {" "}
          Upload{" "}
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
