import NotFoundImage from '../../Image/404.svg';

const NotFound = () => {
  return (
    <div className="mt-40 flex items-center justify-center">
      <img src={NotFoundImage} alt="404 image Page is not found" />
    </div>
  );
};

export default NotFound;
