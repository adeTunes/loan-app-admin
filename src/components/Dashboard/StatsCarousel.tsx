import { Carousel } from "@mantine/carousel";
import StatsCard from "./StatsCard";
import adminStats from "../../layout/adminStats";
import { createStyles } from '@mantine/core';

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

function StatsCarousel() {
    const { classes } = useStyles();

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        initialSlide={3}
        classNames={classes}
        styles={{
            container: {
                display: "grid",
                gridTemplateColumns: "repeat(4, 170px)",
                gap: "30px"
            }
        }}
      >
        {adminStats.map(({ icon, name, stats, bg }, idx) => (
          <Carousel.Slide>
            <StatsCard
              key={idx}
              icon={icon}
              name={name}
              stats={stats}
              bg={bg}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default StatsCarousel;
