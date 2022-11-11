import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Speakers.css";
import motif from '../../assets/images/motif.png'
import avatar from '../../assets/images/avatar.png'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span style={{ color: "gray", fontSize: "25px" }}><FiChevronLeft/></span>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span style={{ color: "gray", fontSize: "25px" }}><FiChevronRight/></span>
    </div>
  );
};
const Speakers = () => {
  return (
    <>
    <div className='section-title'>
    <h3 className='text-brown'>Event <span className='text-dark'>Speakers</span></h3>
    <p className='text'>we offer the right drone environment.</p>
</div>
    <div
      className="speakers"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          
          <Card img={avatar}  />
          <Card img={avatar} />
          <Card img={avatar}/>
        </Slider>
      </div>
    </div>
    </>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        backgroundImage:{motif}
      }}
    >
      <img
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #f90030",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{ marginTop: 25 ,fontSize:20}}>
        <span style={{ fontWeight: 500, color: "#f90030" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
      <p style={{ fontSize:15, color:"black"}}>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
    </div>
  );
};

export default Speakers;