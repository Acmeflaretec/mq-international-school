import { useEffect, useRef } from 'react';

const ImageCarousel: React.FC = () => {
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const ul = ulRef.current;
        if (ul) {
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            if (ul.nextSibling) {
                (ul.nextSibling as HTMLElement).setAttribute('aria-hidden', 'true');
            }
        }
    }, []);

    return (
        <div className="w-full inline-flex max-w-[96vw] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul ref={ulRef} className="flex items-center justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <img src="/images/gallery/AJI_3786.jpg" className='w-50 h-40' alt="Facebook" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_3854.jpg" className='w-50 h-40' alt="Disney" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_3858.jpg" className='w-50 h-40' alt="Airbnb" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_3868.jpg" className='w-50 h-40' alt="Apple" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_4516.jpg" className='w-50 h-40' alt="Spark" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_4031.jpg" className='w-50 h-40' alt="Samsung" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_4147.jpg" className='w-50 h-40' alt="Quora" />
                </li>
                <li>
                    <img src="/images/gallery/AJI_4208.jpg" className='w-50 h-40' alt="Sass" />
                </li>
            </ul>
        </div>
    );
};

export default ImageCarousel;
