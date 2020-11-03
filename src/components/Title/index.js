import React from "react";

import TitleLetter from "../TitleLetter";

function Title({ title, style = {} }) {
   return [...title].map((letter, i) => (
      <TitleLetter style={style} key={i} letter={letter} />
   ));
}

export default Title;
