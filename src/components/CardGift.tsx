"use client";
import listGift from "@/data/listGift";
import Image from "next/image";
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
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function CardGift() {
  const { isOpen, onOpen, onClose, getButtonProps } = useDisclosure();
  const [backdrop, setBackdrop] = useState<any>("opaque");
  const [name, setName] = useState<string | any>("");
  const [message, setMessage] = useState<string | any>("");
  const [urlBuy, setUrlBuy] = useState<string | any>("");
  const [buttonMessage, setButtonMessage] = useState(true);
  const [emailSucess, setEmailSucess] = useState<string | any>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const base = "http://localhost:3000";

  const links = "gabilinsda@gmail.com";
  const copyQr = (e: any) => {
    navigator.clipboard.writeText(links)
  }

  const backdrops = ["blur"];

  const handleOpen = (backdrop: any, dataUrl: any) => {
    setBackdrop(backdrop);
    onOpen();

    buyStepOne(dataUrl);
  };

  function buyStepOne(dataUrl: any) {
    console.log("data", dataUrl);
    setUrlBuy(dataUrl);
  }

  function keyMessage(event: any, name: any) {
    setMessage(event.target.value);

    if (event.target.value.length > 20 && name.length > 3) {
      setButtonMessage(false);
    } else {
      setButtonMessage(true);
    }
  }

  function sendEmail(name: any, message: any) {
    const templateParams = {
      from_name: name,
      message: message,
    };
    setLoading(true);
    setButtonMessage(true);
    emailjs
      .send(
        "service_qdwshf3",
        "template_9ppg5yd",
        templateParams,
        "MFbD2ajLKt4rITDg9"
      )
      .then(
        (response) => {
          setName("");
          setMessage("");
          setLoading(false);
          setButtonMessage(false);
          setEmailSucess("Mensagem enviado com sucesso!");

          router.push(`${urlBuy}`);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <>
      <div className="text-telha h-auto flex flex-wrap gap-4 my-4 w-3/5 justify-center items-center max-lg:w-1/2 max-sm:w-11/12">
        <div className="flex flex-row items-center max-sm:flex-col">
          <div className="font-light text-justify mx-10 text-sm max-sm:mx-0 max-sm:w-full">
            <p className="">{`Tudo isso um dia foi um sonho. Sonho construído não somente pelas nossas mãos, mas por todas as mãos que passaram e abençoaram o nosso caminho. Obrigada por fazer parte da nossa história!`}</p>
            <p className="">{`Aos que desejam nos presentear, deixamos cotas da nossa lua de mel na Disney e Miami como opção!`}</p>
            {/* <p>{`Ainda que eu fale as línguas dos homens e dos anjos, se não tiver amor, serei como o sino que ressoa ou como o prato que retine. Ainda que eu tenha o dom de profecia, saiba todos os mistérios e todo o conhecimento e tenha uma fé capaz de mover montanhas, se não tiver amor, nada serei. Ainda que eu dê aos pobres tudo o que possuo e entregue o meu corpo para ser queimado, se não tiver amor, nada disso me valerá. (Coríntios 13:1-3)`}</p> */}
            <p className="">{`Caso prefiram realizar o pix diretamente, pedimos a gentileza que utilizem o QR code disponibilizado ao lado.`}</p>
          </div>
          <div className="mx-10 max-sm:flex-row max-sm:mx-0 max-sm:justify-center max-sm:items-center">
            <Image
              className=""
              src={require("../../public/qrcode.png")}
              alt="imagem principal"
              width={190}
              quality={100}
            />
            <button
              // onPress={() => handleOpen(b, item.buy)}
              onClick={copyQr}
              className="bg-terracota max-sm:px-9 max-sm:py-3 max-sm:items-center"
            >
              <p className="text-offwhite font-light">Copiar QR Code</p>
            </button>
          </div>

        </div>


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
            <div className="text-xl">{item.value}</div>
            {backdrops.map((b) => (
              <Button
                key={b}
                variant="flat"
                color="warning"
                onPress={() => handleOpen(b, item.buy)}
                className="bg-terracota px-10 py-6 max-sm:px-14 max-sm:py-6"
              >
                <p className="text-offwhite">COMPRAR</p>
              </Button>
            ))}
            {/* </Link> */}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3"></div>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
        className="mt-32"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-terracota">
                <p className="text-white text-sm">{urlBuy}</p>
                Deixe sua mensagem
              </ModalHeader>
              <ModalBody>
                <form className="flex flex-col">
                  <input
                    autoFocus={true}
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
                  <p className="text-terracota">
                    {message?.length == ""
                      ? ""
                      : message?.length > 20
                        ? ""
                        : `${message?.length} / 20 caracteres restantes`}
                  </p>
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
                  onPress={() => sendEmail(name, message)}
                  isDisabled={buttonMessage}
                >
                  {loading ? (
                    <Image
                      src={require("../../public/loader.gif")}
                      alt="heart"
                      width={25}
                      height={25}
                    />
                  ) : (
                    `Continuar`
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
