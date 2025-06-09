import { useEffect, useState, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Title, Card, Image, Skeleton, Badge } from "@mantine/core";
import AutoScroll from "embla-carousel-auto-scroll";
import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import classes from "./Artists.module.css";

type Artist = {
  name: string;
  image: string;
  url: string;
};

export function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pluginReady, setPluginReady] = useState(false);

  const autoscroll = useRef<ReturnType<typeof AutoScroll> | null>(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  useEffect(() => {
    async function fetchArtists() {
      setLoading(true);
      try {
        const response = await fetch("/.netlify/functions/Spotify");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch artists. Status: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setArtists(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArtists();
  }, []);

  useEffect(() => {
    if (inView && !autoscroll.current) {
      autoscroll.current = AutoScroll({ speed: 0.75, startDelay: 1500 });
      setPluginReady(true);
    }
  }, [inView]);

  if (error)
    return (
      <Title order={2} ta="center" h={400} className={classes.error}>
        Unable to load artist data at this time.
      </Title>
    );

  const spotify = <IconBrandSpotifyFilled size={16} color="#1ed760" />;

  return (
    <Skeleton visible={loading}>
      <motion.div ref={containerRef}>
        <Carousel
          key={pluginReady ? "with-autoscroll" : "no-autoscroll"}
          mb="xs"
          height={400}
          slideSize={400}
          slideGap="md"
          type="container"
          plugins={
            pluginReady && autoscroll.current ? [autoscroll.current] : []
          }
          onMouseEnter={() => autoscroll.current?.stop()}
          onMouseLeave={() => autoscroll.current?.play(0)}
          emblaOptions={{
            loop: true,
            dragFree: true,
            align: "start",
          }}
          classNames={{ root: classes.carousel, controls: classes.controls }}
        >
          {artists.map((artist, index) => (
            <Carousel.Slide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1 + index * 0.2,
                }}
              >
                <Card
                  component="a"
                  href={artist.url}
                  target="_blank"
                  className={classes.card}
                >
                  <Card.Section>
                    <Image
                      src={artist.image}
                      alt="Artist Image"
                      fit="cover"
                      h={400}
                      className={classes.image}
                    />
                    <Title order={4} className={classes.name}>
                      {artist.name}
                    </Title>
                  </Card.Section>
                </Card>
              </motion.div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: artists.length * 0.2,
        }}
        viewport={{ once: true }}
        className={classes.attribution}
      >
        <Badge leftSection={spotify} variant="light">
          Data provided by Spotify API
        </Badge>
      </motion.div>
    </Skeleton>
  );
}
