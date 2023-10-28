import ContentLoader from 'react-content-loader';

function Loading(props) {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="294" rx="8" ry="8" width="280" height="26" />
      <rect x="0" y="333" rx="8" ry="8" width="280" height="84" />
      <rect x="-1" y="433" rx="8" ry="8" width="107" height="30" />
      <rect x="145" y="425" rx="20" ry="20" width="135" height="44" />
    </ContentLoader>
  );
}

export default Loading;
