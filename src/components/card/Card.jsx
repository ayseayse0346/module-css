const Card = ({lang, img}) => {
  return (
    // bunlar prop olarak alacağımız için lang ve img burda verdik (data.js den alacağız.)cardların içine propları göndereceğiz yani.
    <div>
      <div className="wrapper">
        <h1> {lang} </h1>
       {/* <img className="images" src={img} alt={lang} />  */}
       <img className="images" src={img} alt={lang} /> 
      </div>
    </div>
  );
};

export default Card;
