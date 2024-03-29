import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';

type Props = {
  className?: string;
  name: string;
  description: string;
  image: string;
  url: string;
  [props: string]: any;
};

export default function ToolCard({ className, name, description, image, url, ...props }: Props) {
  const { theme } = useTheme();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: any;
    clientX: number;
    clientY: number;
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      {...props}
      onMouseMove={handleMouseMove}
      className='group p-4 flex relative flex-col border rounded-md bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 shadow-sm mx-0.5'
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background:
            theme == 'light'
              ? useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(200, 200, 200, 0.20),
              transparent 80%
            )
          `
              : useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 100, 100, 0.20),
              transparent 80%
            )
          `,
        }}
      />
      <div className='flex justify-center relative'>
        <svg className='' width='100' height='100' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'>
          <path
            className='group-hover:fill-neutral-200 dark:fill-neutral-800 dark:group-hover:fill-neutral-700 transition-all duration-500'
            stroke='none'
            strokeWidth='0'
            fill='#f5f5f5'
            d='M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
          ></path>
        </svg>
        <div className='absolute top-1/2 -translate-y-1/2'>
          <div className='relative w-8 h-8'>
            <Image
              alt={name}
              src={image}
              fill
              className='object-center object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
      </div>
      <a
        href={url}
        className='font-medium text-lg text-center dark:text-neutral-100 text-neutral-700 dark:hover:text-emerald-500 hover:text-emerald-500 transition-all duration-150'
      >
        {name}
      </a>
      <p className='text-center text-neutral-500 dark:text-neutral-300 text-sm mt-1'>{description}</p>
    </div>
  );
}
