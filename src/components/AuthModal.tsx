"use client";

import Modal from "@/components/Modal";
import useAuthModal from "@/stores/useAuthModal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthModal = () => {
  const { isOpen, onClose, onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [onClose, router, session]);

  return (
    <Modal
      isOpen={isOpen}
      title="Welcome back"
      description="Login to your account"
      onChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Auth
        magicLink
        theme="dartk"
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputText: "#ffffff",
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
