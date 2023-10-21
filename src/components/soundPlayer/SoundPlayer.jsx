import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { IncorectAnswer, correctAnswer } from "../../helper/audioPath";

const SoundPlayer = forwardRef((props, ref) => {
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        playCorrectSound() {
          correctSoundRef.current.play();
        },
        playWrongSound() {
          wrongSoundRef.current.play();
        },
      };
    },
    []
  );

  return (
    <div>
      <audio ref={correctSoundRef}>
        <source src={correctAnswer} type="audio/mpeg" />
      </audio>
      <audio ref={wrongSoundRef}>
        <source src={IncorectAnswer} type="audio/mpeg" />
      </audio>
    </div>
  );
});

export default SoundPlayer;
