import { Type } from "../StyledIcon";

export const pickedToType = (picked: string | null) => {
  switch (picked) {
    case "paper":
      return Type.Paper;
    case "rock":
      return Type.Rock;
    case "scissors":
      return Type.Scissors;
    default:
      return Type.null;
  }
};

export const generateComputerPick = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return Type.Paper;
    case 1:
      return Type.Rock;
    case 2:
      return Type.Scissors;
    default:
      return Type.Paper;
  }
};