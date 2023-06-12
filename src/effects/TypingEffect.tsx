import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TypingEffectProps {
  sequence: any[];
}
const TypingEffect = ({ sequence }: TypingEffectProps) => {
  return <TypeAnimation sequence={sequence} cursor={true} speed={83} />;
};

export default TypingEffect;
