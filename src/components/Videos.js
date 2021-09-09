import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import useVideoList from "./hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = React.useState(1);
  const { loading, videos, error, hasMore } = useVideoList(page);

  console.log(videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: {
                    videoTitle: video.title,
                  },
                }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  key={video.youtubeID}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                key={video.youtubeID}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && (
        <div className="error">No data found!</div>
      )}
      {error && <div className="error">There was an error!</div>}
      <GridLoader loading={loading} size={10} />
    </div>
  );
}
