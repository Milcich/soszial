import { PostList } from "../components/PostList";
import WeatherWidget from "../components/WeatherWidget";

export const Home = () => {
  return (
    <div className="pt-10">
      <WeatherWidget />
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Recent posts
      </h2>
      <div>
        <PostList />
      </div>
    </div>
  );
};
