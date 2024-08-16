import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { PacmanLoader } from "react-spinners";

export default function ModalComponent({ news }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <Button onPress={onOpen} color="danger">
        Lihat Selengkapnya
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        className="max-w-full max-h-full"
      >
        <ModalContent className="p-0">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-red-600 text-white">
                {news.title}
              </ModalHeader>
              <ModalBody className="relative p-0">
                {loading && (
                  <div className="flex justify-center items-center absolute inset-0 z-10 bg-white bg-opacity-75">
                    <PacmanLoader color="#36d7b7" loading={loading} size={50} />
                  </div>
                )}
                <iframe
                  src={news.link}
                  onLoad={handleIframeLoad}
                  frameBorder="0"
                  className={`w-full ${loading ? "hidden" : "block"} h-[70vh] md:h-[80vh] lg:h-[90vh]`}
                ></iframe>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
