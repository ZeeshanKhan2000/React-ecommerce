import "./NewsLatter.css";

const NewsLatter = () => {
  return (
    <div className="newsLatter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscriber to our Newslatter and stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLatter;
