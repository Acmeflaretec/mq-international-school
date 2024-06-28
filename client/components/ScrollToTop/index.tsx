import Image from "next/image";
import Link from "next/link";

export default function ScrollToTop() {

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <Link
        href={"https://api.whatsapp.com/send?phone=9188182188&text=Hi%C2%A0there,%C2%A0Let%27s%C2%A0have%C2%A0a%C2%A0talk"}
        target="_blank"
      >
        <Image src={'/images/whatsapp.png'} alt="whatsapp" width={80} height={80} />
      </Link>
    </div>
  );
}
