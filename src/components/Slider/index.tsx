// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  MutableRefObject,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IconButton, Theme, Typography, useTheme } from '@mui/material';
import classnames from 'classnames';
import SwiperCore from 'swiper';
/* eslint-disable import/no-unresolved */
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { PaginationOptions } from 'swiper/types/modules/pagination';
import { SwiperModule } from 'swiper/types/shared';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
/* eslint-enable import/no-unresolved */
import styles from './styles.module.css';

SwiperCore.use([A11y]);

export interface SwiperSliderProps {
  initialSlide?: number;
  navigation?: boolean;
  children?: ReactNode;
  title?: ReactNode;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  freeMode?: boolean;
  breakpoints?: SwiperOptions['breakpoints'];
  pagination?: boolean;
  className?: string;
  spaceBetween?: number;
}
export const SwiperSlider: FC<SwiperSliderProps> = ({
  initialSlide,
  breakpoints,
  navigation,
  pagination,
  slidesPerView,
  spaceBetween,
  title,
  loop,
  freeMode,
  children,
  className,
}: SwiperSliderProps) => {
  const [pendingRefInit, setPendingRefInit] = useState(true);
  const nextEl: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const prevEl: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const theme: Theme = useTheme();

  useEffect(() => {
    if (pendingRefInit) {
      setPendingRefInit(false);
    }
  }, [pendingRefInit]);

  const modules: SwiperModule[] = useMemo(() => {
    const modules: SwiperModule[] = [];

    if (navigation) {
      modules.push(Navigation);
    }

    if (pagination) {
      modules.push(Pagination);
    }

    return modules;
  }, [navigation, pagination]);

  const navigationOptions: NavigationOptions | undefined = navigation
    ? {
        nextEl: nextEl.current,
        prevEl: prevEl.current,
        lockClass: 'locked',
      }
    : undefined;

  const paginationOptions: PaginationOptions | undefined = pagination
    ? {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-custom-bullet',
        bulletActiveClass: 'swiper-custom-bullet-active',
      }
    : undefined;

  return (
    <div className={classnames(styles.wrapper, className)}>
      {(navigation || title) && (
        <div className={styles.header}>
          {title && <Typography variant="h2">{title}</Typography>}
          {navigation && (
            <div className={styles.navigation}>
              <IconButton
                aria-label="previous"
                ref={prevEl}
                style={{
                  color: theme.palette.icon,
                  border: `2px solid ${theme.palette.icon}`,
                  borderRadius: '10px',
                  marginRight: '24px',
                  padding: '14px',
                }}
              >
                <ArrowBack />
              </IconButton>
              <IconButton
                aria-label="next"
                ref={nextEl}
                style={{
                  color: theme.palette.icon,
                  border: `2px solid ${theme.palette.icon}`,
                  borderRadius: '10px',
                  padding: '14px',
                }}
              >
                <ArrowForward />
              </IconButton>
            </div>
          )}
        </div>
      )}
      <Swiper
        breakpoints={breakpoints}
        children={Children.map(children, (child: ReactNode) => {
          if (!isValidElement(child)) {
            throw new Error(`Swiper children can't be ${typeof child} type.`);
          }
          return cloneElement(child);
        })}
        className={styles.swiper}
        freeMode={freeMode}
        initialSlide={initialSlide}
        loop={loop}
        modules={modules}
        navigation={navigationOptions}
        pagination={paginationOptions}
        slidesPerView={slidesPerView || 'auto'}
        spaceBetween={spaceBetween || 0}
        speed={800}
      />
      {pagination && (
        <div
          className={classnames(
            styles.paginationContainer,
            'swiper-pagination',
          )}
        />
      )}
    </div>
  );
};
export default SwiperSlider;
