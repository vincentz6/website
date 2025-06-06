import { useEffect, useState, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Title, Card, Image, Skeleton, Badge } from "@mantine/core";
import AutoScroll from "embla-carousel-auto-scroll";
import { IconBrandSpotifyFilled } from "@tabler/icons-react";
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
  const autoscroll = useRef(AutoScroll({ speed: 0.75, startDelay: 300 }));

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

  if (error)
    return (
      <Title order={2} ta="center" h={400} className={classes.error}>
        Unable to load artist data at this time.
      </Title>
    );

  const spotify = <IconBrandSpotifyFilled size={16} color="#1ed760" />;

  return (
    <Skeleton visible={loading}>
      <Carousel
        mb="xs"
        height={400}
        slideSize={400}
        slideGap="md"
        type="container"
        plugins={[autoscroll.current]}
        onMouseEnter={autoscroll.current.stop}
        onMouseLeave={() => autoscroll.current.play()}
        emblaOptions={{
          loop: true,
          dragFree: true,
          align: "center",
        }}
        classNames={{ root: classes.carousel, controls: classes.controls }}
      >
        {artists.map((artist, index) => (
          <Carousel.Slide>
            <Card
              key={index}
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
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className={classes.attribution}>
        <Badge leftSection={spotify} variant="light">
          Data provided by Spotify API
        </Badge>
      </div>
    </Skeleton>
  );
}
