"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  description: string;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onChange,
  description,
  title,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur fixed inset-0 " />
        <Dialog.Content className=" rounded-md bg-neutral-800 p-6 focus:outline-none w-full  translate-x-[-50%] translate-y-[-50%] fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:w-[90vw] md:max-w-[28rem] md:max-h[85vh] md:h-auto">
          <Dialog.Title className="text-white text-xl text-center font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            {description}
          </Dialog.Description>

          <div>{children}</div>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className=" rounded-full focus:outline-none  w-6 appearance-none items-center justify-center text-neutral-400 hover:text-white absolute top-2.5 right-2.5 inline-flex h-6 "
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
