"use client";
import listGift from "@/data/listGift";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

export default function CardGift() {
  const { isOpen, onOpen, onClose, getButtonProps } = useDisclosure();
  const [backdrop, setBackdrop] = useState<any>("opaque");
  const [name, setName] = useState<string | any>();
  const [message, setMessage] = useState<string | any>();
  const [urlBuy, setUrlBuy] = useState<string | any>();
  const [buttonMessage, setButtonMessage] = useState(true)

  const backdrops = ["blur"];

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const confirmGuest = () => {};

  function buyStepOne(dataUrl: any) {
    debugger
    console.log("data", dataUrl);
    setUrlBuy(dataUrl);
  }
 
  function keyMessage(event: any, name: any){
    setMessage(event.target.value)

    if(event.target.value.length > 20 && name.length > 3) {
      setButtonMessage(false)
    } else {
      setButtonMessage(true)
    }
  } 

  return (
    <>
      <div className="text-telha h-auto flex flex-wrap gap-4 my-4 w-3/5 justify-center items-center max-lg:w-1/2">
        {listGift.map((item) => (
          <div
            key={item.id}
            className="border p-4 px-8 flex flex-col gap-7 justify-center items-center max-sm:px-14"
          >
            <Image
              src={item.image}
              alt={item.resume}
              height={250}
              width={200}
              className="min-h-32 max-h-32"
            />
            <div className="max-w-48 min-h-14 max-h-14 text-center">
              {item.resume}
            </div>
            <div>{item.value}</div>
            {/* <Link href={item.buy} className="bg-terracota px-6 py-3"> */}
            {/* <p className="text-offwhite">{item.value}</p> */}
            {backdrops.map((b) => (
              <Button
                key={b}
                variant="flat"
                color="warning"
                onPress={() => handleOpen(b)}
                className="bg-terracota px-10 py-6 max-sm:px-14 max-sm:py-6"
              >
                <p
                  className="text-offwhite"
                  onClick={() => buyStepOne(item.buy)}
                >
                  COMPRAR
                </p>
              </Button>
            ))}
            {/* </Link> */}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3"></div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-terracota">
                Deixe sua mensagem
              </ModalHeader>
              <ModalBody>
                <form className="flex flex-col " onSubmit={confirmGuest}>
                  <input
                    className="h-16 pl-3 text-terracota text-2xl border-b border-b-terracota font-bold placeholder:text-terracota placeholder:font-bold  placeholder:text-2xl focus:outline-none 
                            max-sm:w-full max-sm:mt-2"
                    type="text"
                    placeholder="Seu Nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <textarea
                    className="h-16 mt-4 pl-3 text-terracota text-2xl border-b border-b-terracota font-bold placeholder:text-terracota placeholder:font-bold  placeholder:text-2xl focus:outline-none 
                            max-sm:w-full max-sm:mt-2"
                    placeholder="Sua Mensagem"
                    value={message}
                    onChange={(event) => keyMessage(event, name)}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-terracota"
                  variant="light"
                  onPress={onClose}
                >
                  Fechar
                </Button>
                <Button
                  className="bg-terracota text-offwhite"
                  onPress={onClose}
                  isDisabled={buttonMessage}
                >
                  <Link href={`${urlBuy}`}>Continuar</Link>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
