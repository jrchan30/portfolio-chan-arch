import Image from 'next/image';

interface IProps {
  containerClass: string;
}

const BaseLogo = ({ containerClass }: IProps) => {
  return (
    <div className={containerClass}>
      <div className="flex gap-x-2 items-center">
        <Image
          src="/globe-logo.svg"
          alt="russ-arch logo"
          width={30}
          height={30}
        />
        <div className="whitespace-nowrap">
          <span>Chan-</span>
          <span className="!font-merriweather font-bold">arch</span>
        </div>
      </div>
    </div>
  );
};

export default BaseLogo;
