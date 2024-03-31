"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const modalRef = useRef(null)
    const router = useRouter()
    useEffect(() => {
        if (!modalRef?.current?.open) {
            modalRef.current.showModal()

        }

    }, [])

    const onHide = () => {
        router.back()
    }
    return (
        createPortal(<dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-md shadow-teal-700 border border-teal-600 flex flex-col p-2 rounded-md "
        >
            <span
                onClick={onHide}
                className="flex justify-end cursor-pointer"
            >
                <Image
                    src={"/xmark.svg"}
                    alt="close"
                    height={30}
                    width={30}
                />
            </span>
            {children}</dialog>, document.getElementById("modal-container"))
    );
};

export default Modal;