import './Icons.css';

export const Icons = ({ image, name }) => { 
    return (
      <>  
        <button className="iconButton">
          <img src={image} alt={name} className="iconsPicture" />
          <p className="iconsP">{name}</p>
        </button>
      </>
    );
}
