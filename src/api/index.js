import axios from "axios";

export const fetchPoolData = () =>
  axios.get(
    "https://api.apy.vision/portfolio/1/core/0x006CC1b89E9B68E08eEC14a514d17b47b363ACce"
  );
