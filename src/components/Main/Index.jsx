import React from "react";

const Main = ({ list }) => {
  return (
    <main className="cardContainer">
      {list?.map((pokemon, index) => (
        <div key={index} className="card">
          <img className="card-img" src={pokemon.sprites.front_default} alt="" />
          <p> {pokemon.name}</p>
          
          <div className="badgeContainer">
            {pokemon.types.map((item, index) => (
              <span className="badge" key={index}>
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
